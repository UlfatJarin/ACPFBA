import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'

function App() {

  return (
    <div className='bg-amber-800 px-10'>
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default App
