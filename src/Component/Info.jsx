import React from 'react'
import Container from '../Layers/Container'
import tele from '../assets/telephone.png'
import location from '../assets/location.png'
import email from '../assets/email.png'

const Info = () => {
    return (
        <Container className='grid md:grid-cols-2 py-12 md:py-[115px] bg-black'>
               <div className='text-center md:mt-[120px]'>
                 <h2 className='h2 '>Seminarios</h2>
                 <p className='p3 text-white text-center mx-3.5 md:mt-6 md:mb-9'>Enterate acerca de nuestros seminarios</p>
                 <button className='px-4 md:px-[62px] py-0.5 md:py-3 btn rounded-[9px]'>Ver más</button>
               </div>
            <div className='flex justify-center mt-11 '>
                <div className='max-w-[438px] px-5 md:px-12 py-5 md:py-8 bg-[#FE7C45] rounded-[9px]'>
                    <h2 className='h2 mb-3.5 md:mb-8'>Info</h2>
                    <div className='flex gap-7 items-center'>
                        <img className='w-[24px] md:w-[36px]' src={tele} alt="" />
                        <div>
                            <p className='p2 text-white'>Telefono: </p>
                            <p className='p1 text-white'> +54 9 113345679</p>
                        </div>
                    </div>
                    <div className='flex gap-7 items-center my-5'>
                        <img className='w-[24px] md:w-[36px]' src={email} alt="" />
                        <div>
                            <p className='p2 text-white'>E-mail: </p>
                    <p className='p1 text-white'> ACPFBA@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-7 items-center'>
                        <img className='w-[24px] md:w-[36px]' src={location} alt="" />
                        <div>
                            <p className='p2 text-white'>Dirección: </p>
                    <p className='p1 text-white'> Calle cualquiera 1234</p>
                        </div>
                    </div>
                    
                    
                </div>

            </div>

        </Container>
    )
}

export default Info