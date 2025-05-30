import React from 'react'
import Asociatecard from '../Layers/Asociatecard'
import Container from '../Layers/Container'

const Asociate = () => {
    return (
        <Container className='md:pt-[76px] md:pb-[108px] bg-black'>
            <h2 className='h2 mb-9 '>Asóciate</h2>
            <div className='flex justify-evenly md:justify-between'>
                <Asociatecard product='Socio Nuevo' price='$8.000' />
                <Asociatecard product='Socio Pleno' price='$8.000' />
                <Asociatecard product='Renovación' price='$6.500' />

            </div>
        </Container>
    )
}

export default Asociate