import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { FaHeart , FaRegHeart } from "react-icons/fa";
import { useWishList } from "../context/WishListContext";
// import { products } from "../assets/assets";

function ProductItem({ _id, name, price, image, product }) {
  const { currency } = useContext(ShopContext);
  const { state,dispatch } = useWishList();

  const isInWishlist = state.items.some(itm=> itm?._id === product?._id);

  const toggleWishlist = () => {
    if(isInWishlist){
       dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product._id });
    }else{
      dispatch({ type: "ADD_TO_WISHLIST", payload: product })
    }
  }
  return (
    <div className="">
      <Link className="text-gray-700 cursor-pointer " to={`/products/${_id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out border-4 border-yellow-300 rounded-xl"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}{" "}
        </p>
      </Link>
      <button
        className={`hover:bg-yellow-400 rounded-full p-2 ${
          isInWishlist ? 'text-red-500' : 'text-gray-800'
        }`}
        onClick={toggleWishlist}
      >
        {isInWishlist ? <FaHeart /> : <FaRegHeart/>}
      </button>
    </div>
  );
}

export default ProductItem;
