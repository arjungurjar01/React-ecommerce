import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
          {products.map((item, index) => (
            <ProductItem
              key={index}
              _id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              product={item}
            />
          ))}
        </div>
  )
} 

export default ProductList