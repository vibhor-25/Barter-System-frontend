import React from 'react';
import { FaUser } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-22 px-2.5 bg-[#BEBEBE5E] border-blue-800 border-2 shadow-lg'> 
        <img src='public/images/BarterLogo.png' alt='Barter Logo' className='h-14 px-5'/>
        <ul className='flex items-center gap-6 '>
            <li>
                <ul className='lg:flex justify-center items-center gap-8.5 font-black hidden '>
                    <Link id='Requests' to='/requests' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301]'>Requests</Link>
                    <Link id='Wishlist' to='/wishlist' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301]'>Wishlist</Link>
                    <Link id='AddItem' to='/settings' className='text-2xl font-semibold font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301]'>Settings</Link>
                </ul>
            </li>
            <li>
                <ul className='flex justify-center items-center bg-[#aaaafa] py-1.5 px-6 rounded-4xl gap-1 '>
                    <li id="profile-icon"><FaUser size={20} /></li>
                    <Link to="/myprofile" id="profile" className='font-bold text-[22px] font-Inter hover:scale-105 hover:cursor-pointer hover:text-[#193301]'>Profile</Link>
                    <li id="right-arrow-icon"><ChevronRight size={20} /></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar

