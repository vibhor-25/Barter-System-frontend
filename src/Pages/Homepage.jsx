import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import { useState } from 'react';
import Products from '../../public/data/data';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [products, setProducts] = useState(Products);
  return (
    <>
      <img src = 'public/images/Background.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
      <Navbar />
      <SearchBar />
      <Cards products={products} />
    </>
  )
}

export default Homepage