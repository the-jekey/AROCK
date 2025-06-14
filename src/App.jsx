import React, { useRef, useState } from 'react'
import LoadParent from './Components/Loading/LoadParent'
import Home from './Components/Landing/Home'
import Menu from './Components/Menu/Menu'

const App = () => {

  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Menu MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
      <LoadParent />
      <Home MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />

    </>
  )
}

export default App
