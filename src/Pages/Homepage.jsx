import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import { useState } from 'react';
import Products from '../../public/data/data';
import { Link } from 'react-router-dom';
import SendRequest from '../components/SendRequest';
import ProductInfo from '../components/ProductInfo';
import MyCalendar from '../components/Calendar';

const Homepage = () => {

      const [ShowProductInfo, setShowProductInfo] = useState(false) // !!!! TEMPORARILY SET TO TRUE (baame product detail wale page pe send request button se control hoga !)
      const[CurrentProduct, setCurrentProduct] = useState({})
      const [selectedLoc, setSelectedLoc] = useState('All Locations');
      const [ShowSendRequest, setShowSendRequest] = useState(false) // !!!! TEMPORARILY SET TO TRUE (baame product detail wale page pe send request button se control hoga !)
      const[isFilterOpen, setIsFilterOpen] = useState(0)
      const[ShowCalendar, setShowCalendar] = useState(0);

  return (
    <>
      <img src = 'public/images/Background.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
      <Navbar />
      <SearchBar selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} onFilterClick={() => setIsFilterOpen(true)}/>
        <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)}/>
      <Cards setShowProductInfo={setShowProductInfo} CurrentProduct={CurrentProduct} setCurrentProduct={setCurrentProduct} products={Products} selectedLoc={selectedLoc} />
           {ShowProductInfo && <ProductInfo product={CurrentProduct} ShowProductInfo={ShowProductInfo} setShowProductInfo={setShowProductInfo} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest}/>}   
           {ShowSendRequest && <SendRequest ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest} ShowCalendar={ShowCalendar} setShowCalendar={setShowCalendar} />}
    </>
  )
}

export default Homepage