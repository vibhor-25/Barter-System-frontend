import React from 'react'
import { Search  , Funnel , Plus, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LocationMenu from './LocationMenu';
const SearchBar = ({selectedLoc, setSelectedLoc, onFilterClick}) => {
  return (
    <div className='w-full'>
      <div className='mt-5 mb-10 mx-4 sm:mx-8 lg:mx-28 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0'>
        <span className='text-[#05191D] font-bold text-3xl sm:text-4xl lg:text-5xl cursor-grab'>Explore</span>
        <Link to="/items" className='font-Inter font-semibold text-lg sm:text-xl'>
        <button className='bg-[#FF4C4C] rounded-2xl font-Inter text-white px-4 py-2 hover:bg-[#E04343] flex items-center gap-2 w-[80vw] sm:w-auto justify-center lg:justify-start'>
          <Plus size={20} />
          Add Item
        </button></Link>
     
      </div>
      <div id='search-and-filters' className='flex gap-3 sm:gap-5 lg:gap-10 flex-col lg:flex-row justify-center items-center px-4 sm:px-8'>
        <div id='search-bar' className='flex h-10 justify-center bg-[#caf1fd] items-center font-Inter border-blue-800 border rounded-4xl gap-2 w-full lg:w-auto'>
          <Search className='ml-2' size={20} />
          <input type="text" placeholder="Search Something..." className='font-Inter py-2 px-3 sm:px-5 border-none font-semibold text-black rounded-full w-full sm:w-64 ' />
        </div>
        <LocationMenu selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} />
        <button onClick={onFilterClick} className='hover:cursor-pointer bg-[#caf1fd] h-10 w-10 rounded-4xl border-blue-800 border px-2 flex items-center justify-center flex-0'>
          <Funnel size={20} />
        </button>
      </div>
    </div>
  )
}

export default SearchBar