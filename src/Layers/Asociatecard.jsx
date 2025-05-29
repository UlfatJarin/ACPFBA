import React from 'react'
import Alogo from '../assets/img-logo.png'

const Asociatecard = ({ product, price }) => {
    return (
        <div className='max-w-[339px] pt-9 px-3.5 pb-7 bg-white rounded-lg'>
            <img src={Alogo} alt="" />
            <div className='px-3'>
                <p className='font-medium text-[22px]'> {product}  </p>
                <p className='font-semibold text-2xl mt-1 mb-5'> {price}  </p>
                <button className='py-1.5 text-center text-[22px] font-semibold w-full bg-[#FE7C45] text-white'>Comprar ahora</button>
            </div>


        </div>
    )
}

export default Asociatecard