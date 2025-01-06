import React from 'react'

function NewsLatterBox() {
    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='my-10 text-center'>
        <h1 className='text-2xl font-medium text-gray-800 '>Subscribe Now & Get 20% Off</h1>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima ducimus quod.</p>
       
        <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='outline-non w-full sm:flex-1' type="email" placeholder="Enter Your Email" />
            <button className='bg-black text-white text-xs w-auto px-10 py-4 ' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLatterBox