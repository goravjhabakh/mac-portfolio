import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Welcome = () => {
  const containerRef = useRef<HTMLElement>(null)
  const line1Ref = useRef<HTMLParagraphElement>(null)
  const line2Ref = useRef<HTMLHeadingElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!line1Ref.current || !line2Ref.current || !cursorRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } })

    gsap.set(line1Ref.current, { clipPath: "inset(0 0 0 100%)" })
    gsap.set(cursorRef.current, { left: "100%", opacity: 0 })
    gsap.set(line2Ref.current, { y: -20, opacity: 0 })

    tl.to(cursorRef.current, { opacity: 1, duration: 0.5 })
      .to(cursorRef.current, { 
        left: "0%", 
        duration: 2, 
      })
      .to(line1Ref.current, {
        clipPath: "inset(0 0 0 0%)",
        duration: 2,
      }, "<")
      .to(cursorRef.current, { opacity: 0, duration: 0.5 })
      .to(line2Ref.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.1")

  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="welcome">
      <div className="relative">
        <div className="relative overflow-hidden py-2">
          <p ref={line1Ref} className="text-3xl">
            Hey, I'm Gorav Jhabakh! Welcome to my
          </p>

          <div 
            ref={cursorRef}
            className="absolute top-0 bottom-0 w-1 bg-white"
            style={{ left: "100%" }}
          ></div>
        </div>
      </div>

      <h1 ref={line2Ref} className="text-9xl italic">
        portfolio
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  )
}

export default Welcome