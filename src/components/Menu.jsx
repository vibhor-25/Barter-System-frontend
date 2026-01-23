import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft , UserRound , Box , GitPullRequest , SlidersVertical} from 'lucide-react';

const Menu = () => {
const current = window.location.pathname;
const activeClass = (path) => current === path ? 'bg-white rounded-full px-3 py-2' : '';

return (
    <div className='w-65 m-10' >
            <ul className='flex flex-col gap-10 font-Inter font-semibold text-2xl '>
                    <Link to="/home" className={`flex -mx-5 hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl black ${activeClass('/')}`}><ChevronLeft className='inline-block mr-1.5 translate-y-2/7' /> <h1>Back to Home</h1> </Link>
                    <Link to="/myprofile" id='My-Profile' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl black ${activeClass('/myprofile')}`}><UserRound className='inline-block mr-2 ' />My Profile</Link>
                    <Link to="/items" id='My-Items' className={`hover:cursor-pointer font-Inter  font-semibold transition-transform duration-200 text-2xl black ${activeClass('/items')}`}><Box className='inline-block mr-2' />My Items </Link>
                    <Link to="/requests" id='Requests' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl black ${activeClass('/requests')}`}><GitPullRequest className='inline-block mr-2' />Requests</Link>
                    <Link to="/settings" id='Settings' className={`hover:cursor-pointer font-Inter font-semibold transition-transform duration-200 text-2xl black ${activeClass('/settings')}`}><SlidersVertical className='inline-block mr-2' />Settings</Link>
            </ul>
    </div>
)
}

export default Menu