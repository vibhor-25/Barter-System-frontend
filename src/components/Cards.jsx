import React from 'react'
import { useState } from 'react';
import { HeartPlus } from 'lucide-react';
import { MapPin } from 'lucide-react';

const Cards = (props) => {
    const { products } = props;
return (
        <div className='flex justify-center gap-5 flex-wrap my-10 p-5 mx-20 rounded-lg shadow-lg'>
            {products.map((product) => (
                <div key={product.id} className="card w-61 h-100 bg-[#E3FFC9] p-2 rounded-2xl flex flex-col gap-3 items-center shadow-md hover:scale-102 hover:-translate-y-2 transition-transform duration-300">
                    <div className="relative w-56 h-50">
                        <img src={product.img} alt={product.title} className='w-full h-full object-cover rounded-2xl'/>
                        { "statusi" in product && <HeartPlus className={`absolute size-7 shadow-lg top-2 right-2 cursor-cell bg-white p-1 font-semibold rounded-full ${product.statusi ? 'text-red-500' : 'text-gray-400'}`} /> }
                       
                        <div className='absolute bottom-1 right-1 bg-[#FFDBC5] text-[#442600] flex items-center gap-1 px-2 py-0.5 rounded-full'>
                            <MapPin className='size-4'/>
                            <span className='text-sm'>{Math.floor(Math.random() * product.id ) + 1 + " km away"}</span>
                        </div> 
                    </div>
                    <h3 className='text-[#1C3700] font-InriaSans text-2xl'>{product.title}</h3>
                    <p className='text-[#1C3700] font-InriaSans text-xl'>{product.desc}</p>
                    <button className='bg-[#9EFF46] rounded-2xl px-10 py-2 text-[#1C3700] font-Inter relative bottom-0 hover:bg-[#8EDC1B]' > { "statusi" in product ? "Make an Offer" : "See Offers"}</button>
                </div>
            ))}
        </div>
)
}

export default Cards