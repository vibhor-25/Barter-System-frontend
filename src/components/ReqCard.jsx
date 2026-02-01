import React from 'react'
import { useState } from 'react';
import { HeartPlus } from 'lucide-react';
import { MapPin } from 'lucide-react';


const ReqCard = ({product}) => {
  // Handle data from reqsent.js which has: id, title, desc, img, statusi
  const itemId = product.itemId || product.id;
  const name = product.name || product.title || "Product";
  const description = product.description || product.desc || "No description";
  const images = product.images || (product.img ? [product.img] : ["https://via.placeholder.com/400"]);
  const condition = product.condition || product.statusi;
    
  return (
    <div key={itemId} className="card w-80 max-w-[25%] shrink-0 h-auto bg-(--accent-v-light-blue,rgba(237,244,255,1)) p-1 rounded-2xl flex flex-col gap-3 items-start shadow-md hover:scale-102 hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
      <div className="relative w-full aspect-4/3 overflow-hidden cursor-pointer">
        <img src={images[0]} alt={name} className='w-full h-full object-cover rounded-2xl cursor-pointer'/>
        { condition && <HeartPlus className={`absolute size-7 shadow-lg top-2 right-2 cursor-pointer bg-white p-1 font-semibold rounded-full ${condition ? 'text-red-500' : 'text-gray-400'}`} /> }
        
        <div className='absolute bottom-1 right-1 bg-[#FFDBC5] text-[#442600] flex items-center gap-1 px-2 py-0.5 rounded-full cursor-pointer'>
          <MapPin className='size-4'/>
          {/* <span className='text-sm'>{Math.floor(Math.random() * itemId ) + 1 + " km away"}</span> */}
        </div> 
      </div>
      <h3 className='text-[#1C3700] font-Inter font-semibold text-2xl pl-2 cursor-pointer'>{name}</h3>
      <p className='text-[#1C3700] font-InriaSans text-0.5xl pl-2 pr-2 cursor-pointer'>{description}</p>
      <span className={`status-badge ${condition ? 'Old' : 'New'} cursor-pointer`}>
        {condition ? "Old" : "New"}
      </span>
      <button className={`status-box ${condition ? 'Approved' : 'Pending'} cursor-pointer`}>
        {condition ? "Approved" : "Pending"}
      </button>
    </div>
  )
}

export default ReqCard;