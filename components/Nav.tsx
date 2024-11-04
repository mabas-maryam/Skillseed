import React from 'react'

export const Nav = () => {
  return (
  
      <nav className='flex justify-between items-center px-20 p-10 bg-transparent text-white'>
        <div className='flex flex-col'>
        <h1 className='text-3xl'>Electronics, Fashion, Home Goods</h1>
        <h4 className='text-sm text-center'>Vibrant Marketplace</h4>
        </div>
          
      
        <ul className='flex flex-row px-6 ml-20'>
            <li className='text-[#BBA27B] p-4'>Shop now</li>
            <li className='p-4'>Deals</li>
            <li className='p-4'>Categories</li>
            <li className='p-4'>About Us</li>
            <li className='p-4'>Contact</li>
            <li className='flex boder bg-[#BBA27B] text-gray-900 rounded px-4 py-2 p-4 items-center'>Get Started</li>
          </ul>
      
      </nav>
    
  )
}