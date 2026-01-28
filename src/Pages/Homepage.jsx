import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import { useState, useEffect } from 'react';
import DummyProducts from '../../public/data/data';
import SendRequest from '../components/SendRequest';
import ProductInfo from '../components/ProductInfo';
import axios from 'axios';

const Homepage = () => {
  async function getItems() {
    const response = await axios.get("http://localhost:8000/api/auth/barter/items/", {
      withCredentials: true,
    }).then(() => {

       const item_list = response.data;
      setProducts(Object.values(response.data));
    }).catch(() => {

      setProducts(DummyProducts);
    })


  }

  useEffect(() => {
    getItems();
  }, [])

  const [Products, setProducts] = useState([])
  const [ShowProductInfo, setShowProductInfo] = useState(false) // !!!! TEMPORARILY SET TO TRUE (baame product detail wale page pe send request button se control hoga !)
  const [CurrentProduct, setCurrentProduct] = useState({})
  const [selectedLoc, setSelectedLoc] = useState('All Locations');
  const [ShowSendRequest, setShowSendRequest] = useState(false) // !!!! TEMPORARILY SET TO TRUE (baame product detail wale page pe send request button se control hoga !)
  const [isFilterOpen, setIsFilterOpen] = useState(0)
  const [ShowCalendar, setShowCalendar] = useState(false);
  const [SearchVal, setSearchVal] = useState("");
  const [SelectedFilter, setSelectedFilter] = useState([]);


  const filteredProducts = Products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(SearchVal.toLowerCase());
    const matchesFilter = SelectedFilter.length === 0 || SelectedFilter.includes(product.category);

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <img src='public/images/Background.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover' />
      <Navbar />
      <SearchBar SearchVal={SearchVal} setSearchVal={setSearchVal} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} onFilterClick={() => setIsFilterOpen(true)} />
      <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} SelectedFilter={SelectedFilter} setSelectedFilter={setSelectedFilter} />
      <Cards ShowProductInfo={ShowProductInfo} setShowProductInfo={setShowProductInfo} CurrentProduct={CurrentProduct} setCurrentProduct={setCurrentProduct} products={filteredProducts} selectedLoc={selectedLoc} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest} />
      {ShowProductInfo && <ProductInfo product={CurrentProduct} ShowProductInfo={ShowProductInfo} setShowProductInfo={setShowProductInfo} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest} />}
      {ShowSendRequest && <SendRequest setShowProductInfo={setShowProductInfo} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest} ShowCalendar={ShowCalendar} setShowCalendar={setShowCalendar} />}
    </>
  )
}

export default Homepage