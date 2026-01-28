import React from 'react'
import Cards from '../components/Cards'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';

const Wishlist = () => {
      async function getItems(){
          const response = await axios.get("http://localhost:8000/api/auth/barter/items/", {
              withCredentials: true,
          });
      
          
          const item_list = response.data;
          products = Object.values(response.data);
          console.log(products);
      
      }
  
      useEffect(() => {
          getItems();
        }, [])
        
        const [products, setProducts] = useState([])
  return (
    <div className='mx-10 my-10 p-5'>
    <img src = 'public/images/WishlistBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
    <Link to="/home" className='text-2xl flex gap text-[#05191D] font-semibold mx-30 px-15 '><ChevronLeft className='translate-y-1/4' /> <h1>Back to Home</h1> </Link>
    <h1 className='text-[#000000] text-5xl mx-45 px-5 pt-5 font-Inter '>Wishlist</h1>
    <Cards products={products.filter((product) => product.statusi == true)} selectedLoc={'All Locations'} />
    </div>
  )
}

export default Wishlist