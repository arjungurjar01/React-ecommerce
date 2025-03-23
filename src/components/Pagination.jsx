import React from 'react'


function Pagination({ totalPage , currentPage ,handlePage }) {
  
  return (

      <div className='flex justify-center space-x-2 mt-4'>
        <button 
        className='px-3 py-1 border rounded disabled:opacity-50'
        onClick={()=>handlePage(currentPage-1)}
        disabled={currentPage === 1}
        >prev</button>

        {  Array.from({ length: totalPage }, (_, i) => (
        <button
          key={i}
          aria-current="page"
          className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
          onClick={() => handlePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
        <button
        className='px-3 py-1 border rounded disabled:opacity-50'
        onClick={()=>handlePage(currentPage + 1)}
        disabled={currentPage === totalPage}
        >next</button>
        </div>
   
  )
} 

export default Pagination