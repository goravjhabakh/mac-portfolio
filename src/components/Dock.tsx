import { useRef } from "react"
import { dockApps } from "../constants"
import { Tooltip } from "react-tooltip"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import useWindowStore from "../store/window"

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null)
  const { windows, openWindow, closeWindow, focusWindow } = useWindowStore()

  useGSAP(() => {
    const dock = dockRef.current
    if (!dock) return

    const icons = dock.querySelectorAll('.dock-icon')

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect()
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect()
        const center = iconLeft - left + width / 2
        const distance = Math.abs(mouseX - center)
        const intensity = Math.exp(-(distance ** 2.5) / 20000)

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power2.out",
        })
      })
    }

    const handleMoveMouse = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect()
      animateIcons(e.clientX - left)
    }

    const resetIcons = () => icons.forEach((icon) => {
      gsap.to(icon, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.out",
      })
    })

    dock.addEventListener("mousemove", handleMoveMouse)
    dock.addEventListener("mouseleave", resetIcons)

    return () => {
      dock.removeEventListener("mousemove", handleMoveMouse)
      dock.removeEventListener("mouseleave", resetIcons)
    }
  }, [])

  const toggleApp = ({ id, canOpen }: { id: string, canOpen: boolean }) => {
    if (!canOpen) return

    if (windows[id].isOpen) {
      closeWindow(id)
    } else {
      openWindow(id)
      focusWindow(id)
    }

    console.log(useWindowStore.getState().windows)
  }

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, img, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip"
              data-tooltip-content={name} data-tooltip-delay-show={150} disabled={!canOpen} onClick={() => toggleApp({ id, canOpen })}>
              <img src={img} alt={name} loading="lazy" className={canOpen ? "" : "opacity-50"} />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip " />
      </div>
    </section>
  )
}
export default Dock