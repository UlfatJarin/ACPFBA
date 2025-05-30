import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Asociate from './Component/Asociate'
import Info from './Component/Info'
import Contactanos from './Component/Contactanos'
import Seguinos from './Component/Seguinos'
import Login from './Component/Login'

function App() {

  return (
    <div className='bg-black px-[2%]'>
      <Navbar/>
      <Banner/>
      <Asociate/>
      <Info/>
      <Contactanos/>
      <Seguinos/>
      <Login/>
    </div>
  )
}

export default App
