import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import { useState } from 'react';
import Products from '../../public/data/data';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [selectedLoc, setSelectedLoc] = useState('All Locations');

  return (
    <>
      <img src = 'public/images/Background.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
      <Navbar />
      <SearchBar selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc}/>
      <Cards products={Products} selectedLoc={selectedLoc} />
    </>
  )
}

export default Homepage