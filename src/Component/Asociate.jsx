import React from 'react'
import Asociatecard from '../Layers/Asociatecard'
import Container from '../Layers/Container'

const Asociate = () => {
    return (
        <Container className='pt-[76px] pb-[108px] bg-black'>
            <h2 className='font-semibold text-3xl text-white text-center mb-9 '>Asóciate</h2>
            <div className='flex justify-between'>
                <Asociatecard product='Socio Nuevo' price='$8.000' />
                <Asociatecard product='Socio Pleno' price='$8.000' />
                <Asociatecard product='Renovación' price='$6.500' />

            </div>
        </Container>
    )
}

export default Asociate