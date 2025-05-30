import React from 'react'
import Container from '../Layers/Container'
import box from '../assets/box.png'
import fb from '../assets/FB.png'
import apple from '../assets/apple.png'
import twtter from '../assets/twtter.png'
import google from '../assets/google.png'

const Login = () => {
    return (
        <Container className='grid grid-cols-2 py-20 bg-black'>
            <div className='py-10 px-16 bg-[#272626]'>
                <h2 className='h2 text-white mb-5'>Log in</h2>
                <form className='flex flex-col gap-4' action="">
                    <label className='p1 text-white' htmlFor="">Email address or user name</label>
                    <input className='max-h-[40px] p-2 border border-white rounded-xl text-white bg-[#272626]' type="text" placeholder='' />
                    <label className='p1 text-white' htmlFor="">Password</label>
                    <input className='max-h-[40px] p-2 border border-white rounded-xl text-white bg-[#272626]' type="password" placeholder='' />
                    <div className='flex gap-4 items-center'>
                        <input id='remember' className='w-[18px] h-[18px]' type="checkbox" />
                        <label className='p1 text-white' htmlFor="remember">Remember me</label>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <input id='Privacy' className='!w-[28px] !h-[28px]' type="checkbox" />
                        <label className='p1 text-white' htmlFor="Privacy">By continuing, you agree to the Terms of  Use and Privacy Policy</label>
                    </div>
                    <button className=' btn py-1.5 px-[102px] border border-white rounded-xl mt-4  mx-auto '>Log in</button>
                    <p className='font-medium text-lg text-white text-center'>Forget your password</p>
                    <div className='h-0.5 w-full bg-white mt-16 mb-7'></div>
                    <p className='text-center font-semibold text-xl text-white mb-4'>Or continue with</p>
                    <div className='flex justify-evenly'>
                        <img className='w-[48px] h-[48px]' src={fb} alt="" />
                        <img className='w-[48px] h-[48px]' src={apple} alt="" />
                        <img className='w-[48px] h-[48px]' src={google} alt="" />
                        <img className='w-[48px] h-[48px]' src={twtter} alt="" />
                    </div>

                </form>

            </div>
            <div>
                <img src={box} alt="" />
            </div>

        </Container>
    )
}

export default Login