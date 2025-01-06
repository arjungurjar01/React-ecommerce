import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { use } from 'react';
import RelatedProducts from '../components/RelatedProducts';
function Product() {
  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const[productData,setProductData]=useState(false);
  const[image,setImage] = useState('');
  const[size,setSize] = useState('');

  const fetchProductData = async()=>{
         products.map((item)=>{
         if( item._id === productId){
          setProductData(item);
          setImage(item.image[0])
          return null ;
         }
  })
  }
  useEffect(()=>{
     fetchProductData();
  },[products,productId])

  return productData ? (
    <div className='border-t transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/* ------ product images ------- */}

      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
           <div className='flex sm:flex-col overflow-x-auto sm:overflow-x-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='cursor-pointer sm:mb-3 sm:w-full w-[24%] flex-shrink-0' alt={item.name} />
              
              ))
            }
           </div>

           <div className='w-full sm:w-[80%]'>
            <img src={image}  className='w-full h-auto' alt="" />
           </div>

      </div>

      {/* ----- Product Information ----- */}
      <div className='flex-1'>
        <h1 className='text-2xl mt-2 font-medium'>{productData.name} </h1>
        <div className='flex items-center gap-1 mt-2'>
        <FaStar className='text-base text-yellow-400'/>
        <FaStar className='text-base text-yellow-400'/>
        <FaStar className='text-base text-yellow-400'/>
        <FaStar className='text-base text-yellow-400'/>
        <FaStarHalfStroke className='text-base text-yellow-400'/>
        <p className='pl-2'>(154) </p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price} </p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>

        <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {
              productData.size.map((item,index)=>( 
                <button onClick={()=>setSize(item)} className={`bg-gray-100 border rounded p-1 m-1 ${item === size ? 'border-orange-500':''} `} key={index}> {item} </button>
              ))
            }
          </div>

        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
        <hr className='mt-8 sm:w-3/4' />

        <div className='text-sm mt-5 text-gray-500 gap-1 flex flex-col'>
          <p>Product is 100% original.</p>
          <p>Cash on delivary is available.</p>
          <p>7 Day return policy.</p>
        </div>
      </div>

      </div>

      {/* Description and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(154)</p>
        </div>
        <div className='flex flex-col text-gray-500 gap-4  py-4 text-sm'>
         {/* section of description */}
    <div className="bg-gradient-to-r from-yellow-50 via-gray-50 to-orange-50 py-10 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Welcome to VillageVeda</h1>
        <p className="text-lg text-gray-700 mb-8">
          Where the richness of traditional Indian heritage meets the purity of nature. At VillageVeda, we bring you authentic, high-quality products crafted with care and rooted in the wisdom of Indian villages.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Desi Ghee */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Pure Desi Ghee</h2>
            <p className="text-gray-600">
              Made from traditional methods to ensure unmatched aroma, flavor, and nutritional value.
            </p>
          </div>
          {/* Kachi Ghani Oils */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Kachi Ghani Oils</h2>
            <p className="text-gray-600">
              Experience the natural goodness of cold-pressed oils, including mustard, almond, coconut, and peanut oils.
            </p>
          </div>
          {/* Authentic Spices */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Authentic Spices</h2>
            <p className="text-gray-600">
              Enhance your cooking with our vibrant red chili powder and pure turmeric powder, sourced from the finest ingredients.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-8">
          Rediscover the taste and health benefits of natural, unadulterated products with VillageVeda – a brand that celebrates the essence of Indian village life.
        </p>
      </div>
    </div>
   
    
        </div>
      </div>

      {/* Related Products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      
      </div>
  ) : <div className=' opacity-0'></div>
}

export default Product