import React, { useState } from 'react'

function Login() {
  const [currentState,setCurrentState] = useState('Sign Up');
  const onSubmitHandler = async (event) =>{
     event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} action="" className='flex flex-col items-center   w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex mt-10 items-center  gap-2 mb-2'>
        <p className='prata-regular text-3xl'>{currentState} </p>
        <hr className='h-[1.5px] w-8 bg-gray-800 border-none' />
      </div>
      {currentState === 'Login' ? '' :<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter Name' required />
      }
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email Address' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password'required />
      
      <div className='w-full justify-between flex text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password ?</p>
        {
          currentState === 'Login' ? 
          <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> :
          <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>

        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'sign Up'}</button>
    </form>
  )
}

export default Login