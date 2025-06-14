import React from 'react'

const Navbar = (props) => {
       const open = () => {
              props.setMenuOpen(true)
              console.log(props.open)
       }
       return (
              <div className='w-full relative h-12 flex justify-between items-center px-8'>
                     <div className="logo relative left-4  text-2xl font-black"><h1>AROCK</h1>


                     </div>
                     <div onClick={open} className=" cursor-pointer name relative right-4  px-6 text-2xl font-bold top-"><p>Menu</p></div>
              </div>
       )
}

export default Navbar
