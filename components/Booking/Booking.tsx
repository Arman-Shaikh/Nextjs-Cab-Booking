import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards'

function Booking() {
/*    if (typeof window !== "undefined"){
    const screenHight=window.innerHeight*0.72;
    }*/
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
      <div className='border-[1px] p-5 rounded-md'>
        <AutocompleteAddress/>
        <Cars/>
        <Cards/>

        <button className='w-full
         bg-black
        p-1 rounded-md
        mt-4 text-white'>Book</button>
      </div>
      
    </div>
  )
}

export default Booking
