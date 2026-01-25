import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import { useState } from 'react';
import Products from '../../public/data/data';
import { Link } from 'react-router-dom';
import SendRequest from '../components/SendRequest';

const Homepage = () => {
  const [selectedLoc, setSelectedLoc] = useState('All Locations');
    const [ShowSendRequest, setShowSendRequest] = useState(true) // !!!! TEMPORARILY SET TO TRUE (baame product detail wale page pe send request button se control hoga !)
    const[isFilterOpen, setIsFilterOpen] = useState(0)
  return (
    <>
      <img src = 'public/images/Background.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
      <Navbar />
      <SearchBar selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} onFilterClick={() => setIsFilterOpen(true)}/>
        <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}/>
      <Cards products={Products} selectedLoc={selectedLoc} />
      {ShowSendRequest && <SendRequest ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest} />}
    </>
  )
}

export default Homepage