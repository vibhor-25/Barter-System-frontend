import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Cards from '../components/Cards'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SendRequest from '../components/SendRequest';
import ProductInfo from '../components/ProductInfo';
import MyCalendar from '../components/Calendar';
import axios from "../utils/axiosConfig";
import { checkAuthStatus } from '../utils/authUtils';
import Products from '../../public/data/data';

const Homepage = () => {
    const [seller, setSeller] = useState({});
    const [Products, setProducts] = useState([])
    const [ShowProductInfo, setShowProductInfo] = useState(false)
    const [CurrentProduct, setCurrentProduct] = useState({})
    const [selectedLoc, setSelectedLoc] = useState('All Locations');
    const [ShowSendRequest, setShowSendRequest] = useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [ShowCalendar, setShowCalendar] = useState(false);
    const [SearchVal, setSearchVal] = useState('');
    const [SelectedFilter, setSelectedFilter] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const isMountedRef = useRef(true);

    async function getSeller(itemId) {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/auth/barter/seller/${itemId}/`,
          {},
          { withCredentials: true },
        );
        if (isMountedRef.current) {
          console.log('Seller data:', response.data);
          setSeller(response.data);
        }
      } catch (error) {
        console.error('Error fetching seller:', error.response?.status, error.message);
        if (error.response?.status === 403 || error.response?.status === 401) {
          console.error('Not authenticated: Check if user is logged in');
        }
      }
    }

    async function getItems(){
      try {
        console.log('Fetching items (authenticated user)...');
        const response = await axios.get(
          "http://localhost:8000/api/auth/barter/items/",
          { withCredentials: true },
        );

        if (isMountedRef.current) {
          const item_array = Object.values(response.data);
          
          if (item_array.length === 0) {
            console.log('Backend returned empty data, using hardcoded data...');
            setProducts(Products);
          } else {
            setProducts(item_array);
            console.log('Items fetched successfully:', item_array.length, 'items');
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching items:', error.response?.status, error.message);
        if (error.response?.status === 403 || error.response?.status === 401) {
          console.error('Not authenticated: Using hardcoded data...');
          if (isMountedRef.current) {
            setProducts(Products);
          }
        }
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    }

    useEffect(() => {
      const abortController = new AbortController();
      let isAborted = false;

      const checkAuth = async () => {
        try {
          const { isAuthenticated: authenticated } = await checkAuthStatus();
          
          if (!isAborted && isMountedRef.current) {
            setIsAuthenticated(authenticated);
            
            if (authenticated) {
              await getItems();
            } else {
              console.log('User not authenticated, skipping API calls');
              setIsLoading(false);
            }
          }
        } catch (error) {
          console.error('Auth check failed:', error);
          if (!isAborted && isMountedRef.current) {
            setIsLoading(false);
          }
        }
      };

      checkAuth();

      return () => {
        isAborted = true;
        abortController.abort();
      };
    }, []);

  return (
    <>
      <img src = 'public/images/Background.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
      <Navbar />
      <SearchBar SearchVal={SearchVal} setSearchVal={setSearchVal} selectedLoc={selectedLoc} setSelectedLoc={setSelectedLoc} onFilterClick={() => setIsFilterOpen(true)}/>
      <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} SelectedFilter={SelectedFilter} setSelectedFilter={setSelectedFilter}/>
      <Cards setShowProductInfo={setShowProductInfo} CurrentProduct={CurrentProduct} setCurrentProduct={setCurrentProduct} products={Products} selectedLoc={selectedLoc} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest}/>
      {ShowProductInfo && <ProductInfo product={CurrentProduct} ShowProductInfo={ShowProductInfo} setShowProductInfo={setShowProductInfo} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest}/>}   
      {ShowSendRequest && <SendRequest setShowProductInfo={setShowProductInfo} ShowSendRequest={ShowSendRequest} setShowSendRequest={setShowSendRequest} ShowCalendar={ShowCalendar} setShowCalendar={setShowCalendar} />}
      {ShowCalendar && <MyCalendar ShowCalendar={ShowCalendar} setShowCalendar={setShowCalendar} />}
    </>
  )
}

export default Homepage