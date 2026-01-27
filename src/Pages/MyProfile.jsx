import React, { useEffect } from 'react'
import Menu from '../components/Menu'
import { SquarePen, UserRound } from 'lucide-react';
import axios from "axios";


const MyProfile = () => {
    useEffect(() => {
        async function getDetails(){
            console.log('reached funct');
            // const api = axios.create({
            //   baseURL: "http://localhost:8000/api/auth/user/",
            //   withCredentials: true,
            // });

            // api.get("me/");

            const response = await axios.get(
                "http://localhost:8000/api/auth/user/me/",
                { withCredentials: true },
            );

            console.log(response.data);
        }
        getDetails();
    }, []);
  
    return (
    <div>
        <img src = 'public/images/MenuBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
        <div className='flex'>
          <Menu />
          <div id="Details" className='pt-10 px-50 '>
              <div id="h1" className='bg-white rounded w-150 py-3 px-5 text-blue-500 font-bold text-2xl justify-between flex items-center'>Personal Details<SquarePen className='inline-block ml-2 cursor-crosshair text-blue-950' ></SquarePen></div>
              <div className='h-60 w-60 rounded-full bg-blue-500 mx-auto my-5 '>
                <UserRound className='block text-black w-50 h-50 mx-auto pt-10'/>
                </div>
              <form action="">
                <ul className='flex flex-col gap-4 text-lg font-Inter'>
                  <li className='flex flex-row w-150 justify-between text-xl font-serif font-semibold items-center'><label htmlFor="name">Name:</label><input type="text" id="name" name="name" className='border border-blue-500 rounded px-3 py-2 w-96'/></li>
                  <li className='flex flex-row w-150 justify-between text-xl font-serif font-semibold items-center'><label htmlFor="email">Email:</label><input type="email" id="email" name="email" className='border border-blue-500 rounded px-3 py-2 w-96'/></li>
                  <li className='flex flex-row w-150 justify-between text-xl font-serif font-semibold items-center'><label htmlFor="address">Address:</label><input type="text" id="address" name="address" className='border border-blue-500 rounded px-3 py-2 w-96'/></li>
                </ul>
              </form>
          </div>
        </div>
    </div>
  )
}

export default MyProfile