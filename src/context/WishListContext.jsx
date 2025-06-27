import React, { createContext, useContext, useReducer } from 'react'


export const WishListContext = createContext();

const initialState = {
  items: [],
};

export function wishlistReducer(state,action){
   switch (action.type){
    case 'ADD_TO_WISHLIST':
        if(state.items.find((item)=> item._id === action.payload._id)) return state ;
        return {...state,items:[...state.items,action.payload]} ;
   
    case 'REMOVE_FROM_WISHLIST':
    return { ...state , items : [...state.items.filter((item)=>item._id != action.payload)]};

    case 'CLEAR':
        return {...state,items:[]};
    
    default :
        return state ;    
  };
}

export const WishListProvider = ({children}) => {
    const [state,dispatch] = useReducer(wishlistReducer,initialState);
    
    const getTotalWishlistItems = state.items.length ;
  return ( 

    <WishListContext.Provider value={{state,dispatch,getTotalWishlistItems}}>
        {children}
    </WishListContext.Provider>
  )
}



export const useWishList = () => useContext(WishListContext);