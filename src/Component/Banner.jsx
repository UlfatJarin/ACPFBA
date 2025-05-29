import React from 'react'
import Container from '../Layers/Container'
import Ball from '../assets/ball-img.png'
import Whatsapp from '../assets/Whatsapp-Icon.png'
import ellipse from '../assets/Ellipse 1.png'

const Banner = () => {
    return (
        <Container >
            <div className='flex justify-between bg-black '>
                <div className='mt-[57px] '>
                    <img src={Ball} alt="" />
                    <img className='absolute top-[83px] left-2 rotate-[35deg]' src={ellipse} alt="" />
                </div>
                <div className=' text-right max-w-[636px] mt-[139px] mb-[70px]'>
                    <h1 className='mb-12 font-semibold text-4xl text-white'>Asoc. Civil de Preparadores Físicos de Basquetbol Argentino</h1>
                    <h5 className='font-medium text-lg text-white'>Buscamos promover el desarrollo profesional y la excelencia en la preparación física de nuestros atletas. Trabajamos para potenciar el rendimiento de los jugadores y contribuir al crecimiento de nuestro deporte nacional. ¡Unite y juntos llevemos el básquet argentino a otro nivel!</h5>
                </div>
                <img className='absolute right-1/12 bottom-1/12' src={Whatsapp} alt="" />
            </div>
        </Container>
    )
}

export default Banner