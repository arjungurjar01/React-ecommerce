import React from 'react'
import Auth from './Auth'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Profile() {
    const navigate = useNavigate()
    // console.log(session);
    const {signOut,session} = useAuth();


    const handleSignOut = async(e)=>{
        e.preventDefault();
        try {
          await signOut();
          navigate('/')
        } catch (error) {
          console.log('error occure during sign out',error);
        }
      }
  return (
    <div className='flex items-center w-full md:w-1/2 lg:w-1/2  mx-auto justify-center gap-2 mt-4'>
     
     <div className='flex items-center w-full justify-between'>
        <h1 className='text-3xl font-bold text-center'>Profile</h1>

        <div>
       { !session ? <Link to={'/auth/signin'}><button  className='bg-yellow-400 px-4 py-2 rounded-md text-white cursor-pointer hover:text-black '>signIn</button> </Link>  
 :
              <button onClick={handleSignOut} className='bg-red-500 px-4 py-2 rounded-md text-white cursor-pointer hover:text-black '>Logout</button>
       }
        </div>
     </div>
   

    </div>
  )
}

export default Profile