import React, {useEffect, useState} from 'react'
import Cards from '../components/Cards'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Products from '../../public/data/data';

const Wishlist = () => {
  const [wishlistData, SetWishlistData] = useState([])
  const [CurrentProduct, setCurrentProduct] = useState({})
  const [ShowProductInfo, setShowProductInfo] = useState(false)

  useEffect(() => {
    async function getWishlist() {
      try {
        // Try to fetch from backend
        const response = await axios.get(
          "http://localhost:8000/api/auth/barter/wishlist/",
          { withCredentials: true }
        );
        
        console.log('Backend wishlist response:', response.data);
        const itemsArray = Object.values(response.data);
        
        if (itemsArray.length > 0) {
          // Store backend items directly
          localStorage.setItem('wishlistProducts', JSON.stringify(itemsArray));
          SetWishlistData(itemsArray);
          console.log('Successfully loaded wishlist from backend:', itemsArray);
          return;
        }
      } catch (error) {
        console.error('Error fetching from backend:', error.message);
      }
      
      // Fallback: Load from localStorage
      const savedProducts = localStorage.getItem('wishlistProducts');
      console.log('Saved wishlist products from localStorage:', savedProducts);
      
      if (savedProducts) {
        try {
          const wishlistedProducts = JSON.parse(savedProducts);
          console.log('Parsed wishlist products:', wishlistedProducts);
          SetWishlistData(wishlistedProducts);
        } catch (error) {
          console.error('Error parsing wishlist from localStorage:', error);
          SetWishlistData([]);
        }
      } else {
        console.log('No saved wishlist found');
        SetWishlistData([]);
      }
    }

    getWishlist();
  }, [])


  return (
    <div className='mx-10 my-10 p-5'>
    <img src = 'public/images/WishlistBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
    <Link to="/home" className='text-2xl flex gap text-[#05191D] font-semibold mx-16 px-15 '><ChevronLeft className='translate-y-1/4' /> <h1>Back to Home</h1> </Link>
    <h1 className='text-[#000000] text-5xl mx-30 px-5 pt-5 font-Inter '>Wishlist</h1>
      <Cards products={wishlistData} selectedLoc={'All Locations'} setCurrentProduct={setCurrentProduct} setShowProductInfo={setShowProductInfo} />
    </div>
  )
}

export default Wishlist