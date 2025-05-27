import React from 'react'
import Container from '../Layers/Container'
import Logo from '../assets/logo.png'
import cart from '../assets/cart-logo.png'

const Navbar = () => {
  return (
    <Container>
      <div className='max-w-[1096px] mx-auto  py-8 bg-black flex justify-between items-center'>
        <div>
          <img src={Logo} alt="" />

        </div>
        <ul className='text-white flex gap-4.5 items-center'>
          <li>Inicio</li>
          <li>Contacto</li>
          <li>Tienda</li>
          <button className='py-1 px-5 bg-[#FE7C45]'>Login</button>
          <img className='w-[45px] h-[45px]' src={cart} alt="" />
        </ul>
      </div>
    </Container>

  )
}

export default Navbar