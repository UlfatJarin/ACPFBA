import React from 'react'
import Alogo from '../assets/img-logo.png'

const Asociatecard = ({ product, price }) => {
    return (
        <div className='max-w-[339px] md:pt-9 px-4 md:px-3.5 pb-4 md:pb-7 bg-white rounded-lg'>
            <img className='w-[63px] md:w-[312px] mx-auto' src={Alogo} alt="" />
            <div className='md:px-3'>
                <p className=' p1 text-[8px]'> {product}  </p>
                <p className='p2 mt-1 mb-5'> {price}  </p>
                <button className='px-1 py-0.5 md:py-1.5  w-full btn'>Comprar ahora</button>
            </div>


        </div>
    )
}

export default Asociatecard