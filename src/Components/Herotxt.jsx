import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'

const Herotxt = () => {
       const txtref = useRef(null)

       useGSAP(() => {
              let clutter = ""
              const splittxt = txtref.current.textContent.split("")

              splittxt.forEach(function (e) {
                     clutter += `<span>${e}</span>`
              });
              txtref.current.innerHTML = clutter
              gsap.from("h1 span", {
                     y: 100,
                     opacity: 0,
                     stagger: 0.1,
                     delay: 0.5,

              })
       })
       return (
              <div className='w-full'>
                     <h1 ref={txtref} className=' h11 leading-[16vw] h11 font-black uppercase font-[u8] whitespace-nowrap text-[20vw]'>AROCK</h1>
              </div>
       )
}

export default Herotxt
