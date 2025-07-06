import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import Signin from '../features/auth/Signin';
import Signup from '../features/auth/Signup';
import { FcGoogle } from "react-icons/fc";

function Auth() {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[loading,setLoading] = useState('');
  const[error,setError] = useState('');
 const navigate = useNavigate();

  const {session,googleAuth,currentState} = useAuth();

  return (
    <div className='mt-16'>
      <div className='bg-[#FAF9F5] sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80 rounded-lg border shadow-sm'>
      <Outlet/>
      <div className='flex items-center w-full md:w-1/2 lg:w-1/2 mx-auto justify-center gap-2'>
      <hr className='w-1/4' /> 
       <span>or</span>
       <hr className='w-1/4' /> 
      </div>
      <div className='mb-6'>
      <button onClick={googleAuth} className='flex m-auto w-[90%] sm:max-w-96 justify-center items-center gap-2 text-black border border-gray-800 rounded-lg p-2 mt-6 bg-white'> 
          <span className='text-2xl'> <FcGoogle /> </span>
          <span> Continue with Google</span> </button>
      </div>
      </div>
    </div>
  )
}

export default Auth