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
  console.log(session);
  console.log(email," ",password," ",name);


  const onSubmitHandler = async (event) =>{
     event.preventDefault();
  }
  return (
    <div>
      <Outlet/>
      <div className='flex items-center w-full md:w-1/2 lg:w-1/2  mx-auto justify-center gap-2 mt-4'>
      <hr className='w-1/4' /> 
       <span>or</span>
       <hr className='w-1/4' /> 
      </div>
      <div>
      <button onClick={googleAuth} className='flex m-auto w-[90%] sm:max-w-96 justify-center items-center gap-2 text-black border border-gray-800 p-2  mt-6 bg-white'> 
          <span className='text-2xl'> <FcGoogle /> </span>
          <span> {currentState === 'Sign In' ? 'Sign In' : 'Sign Up'} with Google</span> </button>
      </div>
    </div>
  )
}

export default Auth