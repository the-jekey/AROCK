import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const LoadChild = () => {

       const load = useRef(null)

       useGSAP(() => {
              const tl = gsap.timeline()
              tl.to(load.current, {
                     width: "100%",
                     duration: 1.3,
                     ease: "expo.out",
                     delay: 0.7,
              })

              gsap.to(load.current, {
                     opacity: 0,
                     delay: 1.5,
              })
       })

       return (
              <div ref={load} className=' w-0 h-full bg-white'>

              </div>
       )
}

export default LoadChild
