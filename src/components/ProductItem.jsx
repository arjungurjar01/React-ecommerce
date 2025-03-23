import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

function ProductItem({id,name,price,image}) {
 
     const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer ' to={`/products/${id}`}>      
       <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out border-4 border-yellow-300 rounded-xl' src={image[0]} alt="" />
       </div>
       <p className='pt-3 pb-1 text-sm'>{name}</p>
       <p className='text-sm font-medium'>{currency}{price} </p>
        
        </Link>
  )
}

export default ProductItem