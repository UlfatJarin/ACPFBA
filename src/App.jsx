import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Asociate from './Component/Asociate'
import Info from './Component/Info'
import Contactanos from './Component/Contactanos'

function App() {

  return (
    <div className='bg-amber-800 px-10'>
      <Navbar/>
      <Banner/>
      <Asociate/>
      <Info/>
      <Contactanos/>
    </div>
  )
}

export default App
