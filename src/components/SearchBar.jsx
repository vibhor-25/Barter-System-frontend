import React from 'react'
import { Search , MapPin , Funnel , Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
const SearchBar = () => {
  return (
    <div>
    <div className ='h-5 mt-5 mb-10 mx-28 '>
      <span className='text-[#05191D] font-bold text-5xl  h-10 cursor-grab'>Explore</span>
      <button className='bg-[#FF4C4C] rounded-2xl font-Inter text-white px-4 py-2 hover:bg-[#E04343] absolute right-20'>
        <Plus size={20} className='inline-block -translate-y-3/10 mr-2'/>
        <Link to="/items" className='font-Inter font-semibold text-2xl'>Add Item</Link>
      </button>
    </div>
    <div id='search-and-filters' className='flex gap-5 lg:gap-10 flex-col lg:flex-row justify-center items-center'>
        <div id='search-bar' className='flex justify-center bg-[#caf1fd] items-center font-Inter border-blue-800 border rounded-4xl gap-2 mx-15 my-2.5  '>
            <Search className='ml-2 '/>
            <input type="text" placeholder="Search Something..." className='font-Inter py-2 px-20 border-none font-semibold text-black border-blue-800 border rounded-full '/>
        </div>
        <div id='filters' className='flex justify-center bg-[#caf1fd] border-blue-800 border items-center font-Inter rounded-4xl gap-2 mx-15   '>
            <MapPin className='ml-2 '/> 
            <input type="text" placeholder="Location" className='font-Inter py-2 px-5 border-none font-semibold text-black  rounded-full '/>
        </div>
        <Funnel className='hover:cursor-pointer bg-[#caf1fd] h-10 w-10 pt-2 px-1 pb-1 rounded-4xl border-blue-800 border'/>

    </div>
    </div>
  )
}

export default SearchBar