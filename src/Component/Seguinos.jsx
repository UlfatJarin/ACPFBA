import React from 'react'
import Container from '../Layers/Container'
import linkdlin from '../assets/linkdlin-icon.png'
import insta from '../assets/ig-icon.png'
import fb from '../assets/facebook-icon.png'
import CB from '../assets/image-CB.png'

const Seguinos = () => {
  return (
    <Container className='pt-28 pb-16 bg-black ' >
        <div className=' h-0.5 w-full bg-white'></div>
      <div className='flex justify-between items-center mt-11  mx-8'>
          <div className='max-w-[408px]'>
            <p className='font-semibold text-[22px] text-white'>Seguinos en nuestras redes sociales</p>
            <div className='flex justify-evenly items-center'>
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={linkdlin} alt="" />
            </div>
        </div>
        <div className=' bg-white py-2.5 px-3.5'>
            <p>Desarrollado por :</p>
            <img src={CB} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Seguinos