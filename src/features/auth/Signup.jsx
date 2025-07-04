import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Signup() {
      const[name,setName] = useState('');
      const[email,setEmail] = useState('');
      const[password,setPassword] = useState('');
      const[loading,setLoading] = useState('');
      const[error,setError] = useState('');
      const {signUpNewUser,session,setCurrentState} = useAuth();
      const navigate = useNavigate();

      const handleSignUp = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try {
         const result = await signUpNewUser(email,password,name) ;
    
        if( result.success){
          // console.log(result);
          navigate('/')
        }
        } catch (error) {
          setError(error);
        } finally{
          setLoading(false);
        }
      }


      const handleCurrentState=()=>{
        setCurrentState('Sign In');
        navigate('/auth/signin')
      }
  return (
    <>
    <form onSubmit={handleSignUp} action="" className='flex flex-col items-center w-[90%] sm:max-w-96 mx-auto gap-4 text-gray-800'>
    <div className='inline-flex mt-10 items-center  gap-2 mb-2'>
      <p className='prata-regular text-3xl'> Sign Up </p>
      <hr className='h-[1.5px] w-8 bg-gray-800 border-none' />
    </div>
    <input onChange={(e)=>setName(e.target.value)} type="text" className='w-full px-3 py-2 border border-gray-400 rounded-lg' placeholder='Enter Name' required />
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className='w-full px-3 py-2 border border-gray-400 rounded-lg' placeholder='Email Address' required/>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className='w-full px-3 py-2 border border-gray-400 rounded-lg' placeholder='Password'required />
    
    <div className='w-full justify-between flex text-sm mt-[-8px]'>
      <p className='cursor-pointer'>Forgot Your Password ?</p> 
      <p onClick={handleCurrentState} className='cursor-pointer'>Login Here</p>
    </div>
    <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4 rounded-lg'>sign Up</button>
  </form>
  </>
  )
}

export default Signup