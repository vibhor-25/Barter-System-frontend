import React from 'react'
import { useState } from 'react';
import { HeartPlus } from 'lucide-react';
import { MapPin } from 'lucide-react';


const ReqCard = ({product}) => {
    
return (
            
    <div key={product.itemId} className="card w-80 max-w-[25%] flex-shrink-0 h-auto bg-[var(--accent-v-light-blue,rgba(237,244,255,1))] p-1 rounded-2xl flex flex-col gap-3 items-start shadow-md hover:scale-102 hover:-translate-y-2 transition-transform duration-300">
        <div className="relative w-full aspect-[4/3] overflow-hidden ">
            <img src={product.img} alt={product.name} className='w-full h-full object-cover rounded-2xl'/>
            { "statusi" in product && <HeartPlus className={`absolute size-7 shadow-lg top-2 right-2 cursor-cell bg-white p-1 font-semibold rounded-full ${product.statusi ? 'text-red-500' : 'text-gray-400'}`} /> }
            
            <div className='absolute bottom-1 right-1 bg-[#FFDBC5] text-[#442600] flex items-center gap-1 px-2 py-0.5 rounded-full'>
                <MapPin className='size-4'/>
                {/* <span className='text-sm'>{Math.floor(Math.random() * product.id ) + 1 + " km away"}</span> */}
            </div> 
        </div>
        <h3 className='text-[#1C3700] font-Inter font-semibold text-2xl pl-2'>{product.name}</h3>
        <p className='text-[#1C3700] font-InriaSans text-0.5xl pl-2 pr-2'>{product.description}</p>
        <span className={`status-badge ${product.condition ? 'Old' : 'New'}`}>
            {product.statusi ? "Old" : "New"}
        </span>
        <button className={`status-box ${product.condition ? 'Approved' : 'Pending'}`}>
            {product.condition ? "Approved" : "Pending"}
        </button>
    </div>
)
}

export default ReqCard;