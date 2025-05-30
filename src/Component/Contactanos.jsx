import React from 'react'
import Container from '../Layers/Container'
import player from '../assets/basket-player.png'

const Contactanos = () => {
    return (
        <Container className='grid md:grid-cols-2 py-20 bg-black'>
            <img className=' ' src={player} alt="" />
            <div>
                <form className='max-w-[528px] rounded-sm md:bg-[#272626] px-8 py-8 flex flex-col justify-end gap-4 md:gap-9 '>
                    <h2 className='h2'>Contactanos</h2>

                    <div className='flex gap-4 justify-between'>
                        <input className='input w-[150px] md:max-w-[213px] ' type="text" placeholder='Nombre' />
                        <input className='input w-[150px] md:max-w-[213px] ' type="text" placeholder='Apellido' />
                    </div>
                    <input className='input w-full ' type="email" placeholder='Email' />
                    <input className='input w-full ' type="number" placeholder='Telefono' />
                    <textarea className='input w-full' name="" id="" placeholder='Mensaje'></textarea>
                    <div className='flex justify-center'>
                        <button className='btn pt-[11px] pb-3 px-8 md:px-[70px] rounded-[9px]'> Enviar</button>
                    </div>
                </form>
            </div>

        </Container>


    )
}

export default Contactanos