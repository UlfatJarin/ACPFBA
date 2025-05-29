import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Asociate from './Component/Asociate'

function App() {

  return (
    <div className='bg-amber-800 px-10'>
      <Navbar/>
      <Banner/>
      <Asociate/>
    </div>
  )
}

export default App
