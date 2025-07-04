import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[loading,setLoading] = useState('');
    const[error,setError] = useState('');
    const {signInExistingUser,session,setCurrentState} = useAuth();
    const navigate = useNavigate();

const handleSignIn  = async (e) =>{
  e.preventDefault();
  setLoading(true);
  try {
    const result = await signInExistingUser(email,password);
    if(result.success){
      // console.log(result);
      navigate('/');
    }
  } catch (error) {
    setError(error);
    console.log('error occur during signin',error)
  } finally{
    setLoading(false);
  }
}

  const handleCurrentState=()=>{
    setCurrentState('Sign Up');
    navigate('/auth/signup')
  }

  return (
    <>
    <form onSubmit={handleSignIn} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800'>
    <div className='inline-flex mt-10 items-center  gap-2 mb-2'>
      <p className='prata-regular text-3xl'> Sign In </p>
      <hr className='h-[1.5px] w-8 bg-gray-800 border-none' />
    </div>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className='w-full px-3 py-2 border border-gray-400 rounded-lg' placeholder='Email Address' required/>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className='w-full px-3 py-2 border border-gray-400 rounded-lg' placeholder='Password'required />
    
    <div className='w-full justify-between flex text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot Your Password ?</p>      
      <p onClick={handleCurrentState} className='cursor-pointer'>Create account</p>
    </div>
    <button className='bg-black text-white font-light px-8 py-2 mt-4 rounded-lg'>Login</button>
  </form>
  </>
  )
}

export default Signin