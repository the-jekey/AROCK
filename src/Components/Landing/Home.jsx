import React from 'react'
import Navbar from '../Navbar'
import Main from '../Main'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = (props) => {
       const Homeref = useRef(null)
       const Pageref = useRef(null)

       useGSAP(() => {
              gsap.to(Homeref.current, {
                     y: "-100%",
                     duration: 1.3,
                     ease: "expo.out",
                     delay: 0.7,
              })
              gsap.from(Pageref.current, {
                     duration: 1,
                     delay: 0.4,
                     y: 50,
                     scale: 1.05,
              })

       })
       console.log(props)
       return (
              <div className='h-screen overflow-hidden'>
                     <div ref={Homeref} className="loading h-screen w-full fixed bg-black z-9">

                     </div>
                     <div ref={Pageref} className='h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]'>
                            <Navbar MenuOpen={props.MenuOpen} setMenuOpen={props.setMenuOpen} />
                            <Main />
                     </div>
              </div>

       )
}

export default Home
