import React from 'react'
import { font2 } from '../Components/Fonts/Font'

const Auth = () => {
  return (
    <div className={` ${font2.className} bg-galaxy text-white min-h-screen`}>
      <div className='p-4 text-4xl font-bold flex justify-center items-center sm:justify-start sm:items-start text-normalText-whiteNormal'>Galaxy Chat</div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-normalText-paleGold text-3xl p-4 sm:mt-24'>Sign In</h1>
        <p className='text-normalText-whiteNormal text-lg '>Sign in using your Google Account</p>
        <input className='p-3 px-12 bg-slate-100 rounded-2xl mt-8 text-black' type='email' placeholder='Enter Your Gmail'/>
        <input className='p-3 px-12 bg-slate-100 rounded-2xl mt-4 text-black' type='password' placeholder='Enter Your Password'/>
        <button className='px-4 py-2 bg-galaxy-galaxi rounded-full mt-4 hover:bg-slate-800 duration-300'>Sign in</button>
      </div>
    </div>
  )
}

export default Auth