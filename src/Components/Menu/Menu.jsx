import React from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Menu = (props) => {

       const menuRef = useRef(null)
       useGSAP(() => {
              if (props.MenuOpen) {
                     gsap.to(menuRef.current, {
                            top: 0,
                     })
              }
       }, [props.MenuOpen])

       return (
              <div ref={menuRef} className='h-screen w-full bg-zinc-500 fixed top-full left-0 z-50 '>
                     <MenuLeft />
                     <MenuRight />
                     
              </div>
       )
}

export default Menu
