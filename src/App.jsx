import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

import { ToastContainer, toast } from 'react-toastify';
import Signup from './features/auth/Signup'
import Signin from './features/auth/Signin'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Wishlist from './pages/WishlistPage'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/auth" element={<Auth/>} >
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/orders" element={<Orders/>} /> 
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
