import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosConfig';

const Navbar = () => {
  const [userName, setUserName] = useState('User');
  const isMountedRef = useRef(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUserName = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/auth/user/me/',
          { 
            withCredentials: true,
            signal: abortController.signal 
          }
        );
        if (isMountedRef.current && response.data.first_name) {
          setUserName(response.data.first_name);
        }
      } catch (error) {
        if (error.name !== 'CanceledError') {
          console.error('Error fetching user name:', error.message);
          if (isMountedRef.current) {
            setUserName('User');
          }
        }
      }
    };

    fetchUserName();

    return () => {
      isMountedRef.current = false;
      abortController.abort();
    };
  }, []);
  return (
    <nav className='flex sticky top-0 z-100 justify-between items-center h-22 px-2.5 bg-[#BEBEBE5E] shadow-[0_4px_13.7px_rgba(0,0,0,0.25)] backdrop-blur-lg'> 
        <img src='public/images/BarterLogo.png' alt='Barter Logo' className='h-14 px-5'/>
        <ul className='flex items-center gap-6 '>
            <li>
                <ul className='lg:flex justify-center items-center gap-8.5 font-black hidden hover:cursor-pointer  '>
                    <Link id='Requests' to='/requests' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301] hover:bg-[#fcfdfd] py-2 px-6 rounded-4xl'>Requests</Link>
                    <Link id='Wishlist' to='/wishlist' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301] hover:bg-[#fcfdfd] py-2 px-6 rounded-4xl'>Wishlist</Link>
                    <Link id='MyItems' to='/items' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301] hover:bg-[#fcfdfd] py-2 px-6 rounded-4xl'>My Items</Link>
                    <Link id='AddItem' to='/settings' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301] hover:bg-[#fcfdfd] py-2 px-6 rounded-4xl'>Settings</Link>
                </ul>
            </li>
            <li>
                    <Link to="/myprofile" id="profile" className='font-bold text-[22px] font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301]'>
                <ul className='flex justify-center items-center bg-[#aaaafa] py-1.5 px-6 rounded-4xl gap-1 '>
                    <li id="profile-icon"><FaUser size={20} /></li>
                    Hi {userName}
                    <li id="right-arrow-icon"><ChevronRight size={20} /></li>
                </ul>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

