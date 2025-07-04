import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useWishList } from "../../context/WishListContext";
import { ShopContext } from "../../context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";

function Wishlist() {
  const[productSize,setProductSize] = useState({});
  const { currency ,addToCart} = useContext(ShopContext);
  const { state, dispatch } = useWishList();
  const { items } = state;
  // console.log(items, "items wish");

  const handleSize = (productId , size) =>{
      setProductSize((prev)=>({...prev,[productId]:size}));
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-10">Wishlist</h1>
      {items.length === 0 ? (
        <>
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
          <p className="text-center text-gray-500">
            Add items to your wishlist to keep track of them.
          </p>
          <div className="flex justify-center mt-5">
            <Link to="/collection">
              <button className="bg-black text-white px-4 py-2 rounded">
                Browse Products
              </button>
            </Link>
          </div>
        </>
      ) : (
        <ul className="space-y-2">
          {items.length > 0 && items.map((item) => (
            <div
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cold-[4fr_2fr_0.5fr] items-center gap-4"
              key={item._id}
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={item.image[0]}
                  alt="product-image"
                />
                
                <div>
                  <Link to={`/products/${item._id}`}>
                  <h1 className="font-medium text-lg">{item.name}</h1>
                  </Link>
                  <p className="text-xs sm:text-lg font-medium">
                    {item.size.map((siz, index) => (
                      <button
                        onClick={()=> handleSize(item._id,siz)}
                        className={`bg-gray-100 border rounded p-0.5 m-0.5 ${
                          siz === productSize[item._id] ? "border-orange-500" : ""
                        } `}
                        key={index}
                      >
                        {" "}
                        {siz}{" "}
                      </button>
                    ))}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {item.price}{" "}
                    </p>
                    
                  </div>
                </div>
              </div>
             
            <button onClick={()=>addToCart(item._id,productSize[item._id])} className='bg-black text-white px-4 py-2 text-sm active:bg-gray-700 w-32 rounded'>ADD TO CART</button>
              
            <RiDeleteBin6Line onClick={() =>
                  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item._id })
                } className='text-2xl  mr-5 cursor-pointer' /> 

            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
