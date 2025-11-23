import { useLayoutEffect, useRef } from "react"
import useWindowStore from "../store/window"
import type { JSX } from "react/jsx-runtime"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Draggable from "gsap/Draggable"

const WindowWrapper = (Component: React.FC, windowId: string) => {
  const Wrapped = (props: JSX.IntrinsicAttributes) => {
    const { focusWindow, windows } = useWindowStore()
    const { isOpen, zIndex } = windows[windowId]
    const ref = useRef<HTMLElement>(null)

    useGSAP(() => {
      const element = ref.current
      if (!element) return

      element.style.display = 'block'
      gsap.fromTo(element, 
        { scale: 0.8, opacity: 0, y:40 },
        { scale: 1, opacity: 1, y:0, duration: 0.4, ease: "power3.out" }
      )
    }, [isOpen])

    useGSAP(() => {
      const element = ref.current
      if (!element) return

      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowId),
      })

      return () => instance.kill()
    }, [])

    useLayoutEffect(() => {
      const element = ref.current
      if (!element) return

      element.style.display = isOpen ? 'block' : 'none'
    }, [isOpen])

    return (
      <section id={windowId} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    )
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`
  return Wrapped;
}

export default WindowWrapper