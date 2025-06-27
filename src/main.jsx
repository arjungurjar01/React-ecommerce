import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { WishListProvider } from './context/WishListContext.jsx'

createRoot(document.getElementById('root')).render(
  
   <AuthProvider>
   <BrowserRouter>
      <ShopContextProvider>
         <WishListProvider>
          <App />
          </WishListProvider>
      </ShopContextProvider> 
   </BrowserRouter>
   </AuthProvider>
)
