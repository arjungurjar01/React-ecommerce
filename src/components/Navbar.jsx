import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { ShopContext } from '../context/ShopContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { FaRegHeart } from "react-icons/fa";
import { useWishList } from '../context/WishListContext.jsx';


function Navbar() {
    const [visible,setVisible] = useState(false);
    const {setShowSearch,getCartCount} = useContext(ShopContext)
    const {getTotalWishlistItems} = useWishList();
    const {session} = useAuth();
    const user = session?.user ;
    const avatar = user?.user_metadata?.avatar_url ;
    const firstLetter =
    user?.user_metadata?.full_name?.charAt(0).toUpperCase() ||
    user?.email?.charAt(0).toUpperCase() ;
    



    

    // console.log(session.user?.user_metadata?.avatar_url)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <Link to={'/'}><img src={assets.logo} className='w-[33%]   ' alt="logo" /> </Link> 
       
       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
         <NavLink to='/' className='flex flex-col text-center gap-1'>
         <p>HOME</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center hidden' />
         </NavLink>
         <NavLink to='/collection' className='flex flex-col text-center gap-1'>
         <p>COLLECTIONS</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center hidden' />

         </NavLink>
         <NavLink to='/about' className='flex flex-col text-center gap-1'>
         <p>ABOUT US</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center hidden' />

         </NavLink>
         <NavLink to='/contact' className='flex flex-col text-center gap-1'>
         <p>CONTACT</p>
         <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 self-center hidden' />

         </NavLink>
         
       </ul>

       <div className='flex items-center gap-6'>
        <FiSearch onClick={()=>setShowSearch(true)} className='text-2xl  cursor-pointer' />
 
 {/* wishlist */}
         <Link to='/wishlist' className='flex flex-col text-center gap-1 relative'> <FaRegHeart className='text-2xl text-gray-800 hover:text-gray-600'/>
          <p className='absolute right-[-6px] bottom-[-4px] bg-black rounded-full text-white text-center w-4 leading-4 aspect-square text-[10px]'>
           {getTotalWishlistItems} 
        </p>
  </Link>
  {/* cart */}
        <Link to='/cart' className='relative'>
        <SlHandbag className='text-2xl'/>
        <p className='absolute right-[-5px] bottom-[-5px] bg-black rounded-full text-white text-center w-4 leading-4 aspect-square text-[10px]'>
           {getCartCount()} 
        </p>
        </Link>

        {/* profile */}
        <div className='group relative '>
       <Link to={'/profile'}>  {
        !avatar ? ( firstLetter && (<p className='bg-yellow-300 text-lg font-normal rounded-full  px-2 lg:px-3 lg:py-1'>{firstLetter}</p>) || <CgProfile className='text-2xl text-black' />)  : <img className='rounded-full w-24 sm:w-auto md:w-auto lg:w-10 object-cover' src={`${session?.user?.user_metadata?.avatar_url}`} alt="avatar" />
       } </Link>

        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 ml-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 ml-4 bg-slate-100 text-gray-500 rounded'>
              account
            </div>
        </div>
        </div>
        {/* three lines for small screens */}
        <IoMenu onClick={()=>setVisible(true)} className='text-2xl cursor-pointer sm:hidden' /> 
       </div>
       {/* sidebar menu for small screen */}
       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
            <div className='flex flex-col text-gray-600'>
                <div className='flex items-center gap-4 p-3 cursor-pointer'>
                <IoArrowBackSharp onClick={()=>setVisible(false)} className='text-2xl rotate-180 h-4' />
                <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTIONS</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT US</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
       </div>
    </div>
  )
}

export default Navbar