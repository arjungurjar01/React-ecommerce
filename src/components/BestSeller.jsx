import React, { useContext, useEffect ,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
      const bestProduct = products.filter((item)=>(item.bestseller))
      setBestSeller(bestProduct.slice(0,5));
    },[])

  return (
    <div className='my-10'>
       <div className='text-3xl text-center py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque.
        </p>
       </div>

       <div className='grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 items-center'>
         {
            bestSeller.map((item,index)=>(
              <ProductItem key={index} _id={item._id} name={item.name} image={item.image} price={item.price} product={item} />
            ))
         }
       </div>
        
        </div>
  )
}

export default BestSeller