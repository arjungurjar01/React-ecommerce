import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import TotalCartAmount from '../components/TotalCartAmount'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {
  const [method , setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
     <div className='text-xl sm:text-2xl my-3'>
      <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
     </div>
     <div className='gap-3 flex'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' required />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' required />
     </div>
    
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' required />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' required />
    
      <div className='gap-3 flex'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' required />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' required />
     </div>
     <div className='gap-3 flex'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pincode' required/>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' required/>
     </div>
     <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' required />

      
      </div>

      {/* Right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <TotalCartAmount/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
      {/* stripe */}
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}>
              </p>
              <img className='h-5 mx-4' src={assets.stripe} alt="stripe-logo" />
            </div>
      {/* razorpay  */}
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}>
              </p>
              <img className='h-5 mx-4' src={assets.razorpay} alt="razorpay-logo" />
            </div>
       {/* cash on delivery */}
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}>
              </p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>
          {/* button */}
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder