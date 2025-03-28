import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { RiDeleteBin6Line } from "react-icons/ri";
import TotalCartAmount from '../components/TotalCartAmount';


function Cart() {
  const {products,cartItems,currency,updateQuantity,navigate} = useContext(ShopContext);
  const [ cartData,setCartData] =useState([]);

  useEffect(()=>{
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
           if(cartItems[items][item] > 0){
            tempData.push({
              _id:items,
              size:item,
              quantity:cartItems[items][item]
            })
           }
      }
    }
    setCartData(tempData)
  },[cartItems])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>product._id === item._id);
            return (
              <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cold-[4fr_2fr_0.5fr] items-center gap-4' key={index}> 
              
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="product-image" />

                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name} </p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price} </p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-100'>{item.size} </p>

                  </div>
                  
                </div>

              </div>
              <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? 'null' : updateQuantity(item._id,item.size,Number(e.target.value)

              )} type="number" className='border items-center max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' min={1} defaultValue={item.quantity} />
              <RiDeleteBin6Line onClick={()=>updateQuantity(item._id,item.size,0)} className='text-2xl  mr-5 cursor-pointer' />
              </div>
            )
          })
        }
      </div>

      {/* Total cart Amount */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
         <TotalCartAmount/>
         <div className='w-full text-end'>
          <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700'>PROCEED TO PAYMENT</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Cart