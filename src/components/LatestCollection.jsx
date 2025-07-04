import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {
    const {products} = useContext(ShopContext);
    // console.log(products);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className='text-3xl py-8 text-center'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet.
            </p>
        </div>
        
      {/* Rendering products */}

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg-grid-cols-6 gap-4 gap-y-6'>
        {latestProducts.map((item,index)=>(
            <ProductItem key={item._id} _id={item._id} image={item.image} name={item.name} price={item.price} product={item} />
        ))}
      </div>


    </div>
  )
}

export default LatestCollection