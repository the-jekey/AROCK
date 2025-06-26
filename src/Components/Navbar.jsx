import React from 'react'

const Navbar = (props) => {
       const open = () => {
              props.setMenuOpen(true)
              console.log(props.open)
       }
       return (
              <div className='w-full relative h-12 flex justify-between items-center px-8'>
                     <div className="logo relative left-4  text-xl font-black"><h1>AROCK</h1>


                     </div>
                     <a href="https://www.instagram.com/the_jekeyy/">
                            <div className=" cursor-pointer name relative right-4  px-6 text-[10px] font-bold lg:text-sm"><p>By Jekey</p> </div>
                     </a>
              </div>
       )
}

export default Navbar
