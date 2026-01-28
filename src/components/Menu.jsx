import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ChevronLeft , UserRound , Box , GitPullRequest , SlidersVertical, X , Logs, Heart} from 'lucide-react';

const Menu = () => {
const current = window.location.pathname;
const activeClass = (path) => current === path ? 'bg-white rounded-full px-3 py-2' : '';

const [isOpen, changeIsOpen] = useState(true);
const toggleMenu = () => changeIsOpen((prev) => !prev);

return (
        <>
        <button
          aria-label="Open menu"
          className={`${isOpen ? 'hidden' : 'flex'} absolute m-10 lg:hidden items-center justify-center text-black`}
          onClick={toggleMenu}
        >
          <Logs size={30} />
        </button>
    <div className={`${isOpen ? 'block w-65 m-10' : 'hidden'} lg:block lg:w-65 lg:m-10 transition-all duration-300`} >
            <ul className='flex flex-col gap-10 font-Inter font-semibold text-2xl '>
                    <div className='flex justify-between items-center px-2'>
                        <Link to="/home" className='hover:cursor-pointer font-Inter font-semibold text-2xl px-2 flex items-center gap-1 text-black whitespace-nowrap'>
                        <ChevronLeft size={26} className='hover:cursor-pointer text-black' />
                        <span>Back to Home</span>
                        </Link>
                        <button onClick={toggleMenu} className='size-10 hover:cursor-pointer lg:hidden'><X /></button>
                    </div>
                    <Link to="/myprofile" id='My-Profile' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl text-black px-2 py-1 block w-full ${activeClass('/myprofile')}`}><UserRound className='inline-block mr-2' />My Profile</Link>
                    <Link to="/items" id='My-Items' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl text-black px-2 py-1 block w-full ${activeClass('/items')}`}><Box className='inline-block mr-2' />My Items</Link>
                    <Link to="/requests" id='Requests' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl text-black px-2 py-1 block w-full ${activeClass('/requests')}`}><GitPullRequest className='inline-block mr-2' />Requests</Link>
                    <Link to="/wishlist" id='Wishlist' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl text-black px-2 py-1 block w-full ${activeClass('/wishlist')}`}><Heart className='inline-block mr-2' />Wishlist</Link>
                    <Link to="/settings" id='Settings' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl text-black px-2 py-1 block w-full ${activeClass('/settings')}`}><SlidersVertical className='inline-block mr-2' />Settings</Link>
            </ul>
    </div>
        </>
)
}

export default Menu