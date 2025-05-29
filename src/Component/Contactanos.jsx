import React from 'react'
import Container from '../Layers/Container'
import player from '../assets/basket-player.png'

const Contactanos = () => {
    return (
        <Container className='grid grid-cols-2 py-20 bg-black'>
            <img src={player} alt="" />
            <div>
                <form className='max-w-[528px] rounded-sm bg-[#272626] px-8 py-8 flex flex-col justify-end gap-9 '>
                    <h2 className='h2'>Contactanos</h2>

                    <div className='flex justify-between'>
                        <input className='input max-w-[213px]' type="text" placeholder='Nombre' />
                        <input className='input max-w-[213px]' type="text" placeholder='Apellido' />
                    </div>
                    <input className='input w-full' type="email" placeholder='Email' />
                    <input className='input w-full' type="number" placeholder='Telefono' />
                    <textarea className='input w-full' name="" id="" placeholder='Mensaje'></textarea>
                    <div className='flex justify-center'>
                        <button className='btn pt-[11px] pb-3 px-[70px] rounded-[9px]'> Enviar</button>
                    </div>
                </form>
            </div>

        </Container>


    )
}

export default Contactanos