import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

function TotalCartAmount() {
    const {currency,delivery_fee,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
         <Title text1={'TOTAL'} text2={'AMOUNT'}/>

      </div>

      <div className='flex flex-col mt-2 gap-2 text-sm'>
        <div className='flex justify-between'>
            <p>SubTotal</p>
            <p>{currency}{getTotalCartAmount()}.00 </p>

        </div>
        <hr />
          <div className='flex justify-between'>
            <p>Shipping fee</p>
            <p>{currency}{delivery_fee}.00 </p>
          </div>
          <hr />
          <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + delivery_fee}.00 </b>
          </div>
      </div>
    </div>
  )
}

export default TotalCartAmount