import React from 'react'
import Container from '../Layers/Container'
import Ball from '../assets/ball-img.png'
import Whatsapp from '../assets/Whatsapp-Icon.png'
import ellipse from '../assets/Ellipse 1.png'

const Banner = () => {
    return (
        <Container >
            <div className='md:flex justify-between items-center bg-black '>
                <div className='mt-[57px] flex justify-center '>
                    <img className='w-[150px] md:w-[383px]' src={Ball} alt="" />
                    <img className='absolute top-[83px] left-2 rotate-[35deg]' src={ellipse} alt="" />
                </div>
                <div className=' text-right max-w-[636px] mt-5 md:mt-[139px] mb-12 md:mb-[70px]'>
                    <h1 className='mb-4 md:mb-12 font-semibold text-[13px] md:text-4xl text-white'>Asoc. Civil de Preparadores Físicos de <br/> Basquetbol Argentino</h1>
                    <h5 className='font-medium text-[10px] md:text-lg text-white'>Buscamos promover el desarrollo profesional y la excelencia en la preparación física de nuestros atletas. Trabajamos para potenciar el rendimiento de los jugadores y contribuir al crecimiento de nuestro deporte nacional. ¡Unite y juntos llevemos el básquet argentino a otro nivel!</h5>
                </div>
                <img className='absolute right-1/12 bottom-1/12' src={Whatsapp} alt="" />
            </div>
        </Container>
    )
}

export default Banner