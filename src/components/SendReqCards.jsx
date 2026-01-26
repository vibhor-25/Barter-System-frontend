import React from 'react'
import { useState } from 'react';

const Cards = ({ products, setSelected, Selected }) => {
    const [hoveredId, setHoveredId] = useState();


    return (
        <>
            <div className='flex  gap-7 justify-center  flex-wrap my-5 rounded-lg '>
                {products.map((product) => (
                    <div key={product.id}
                        onMouseEnter={() => setHoveredId(product.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => Selected.id === product.id ? setSelected({}) : setSelected(product)}
                        className=" bg-[#D7E7FF] hover:cursor-pointer card w-[28.14%] h-[55.7%] p-2 rounded-2xl flex flex-col gap-3 items-start shadow-md  hover:bg-linear-to-r hover:from-[#CDEBFF] hover:to-[#ABC9FD] transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* {
                                    (Selected.id === product.id || (hoveredId === product.id)) && (
                                        <div className="selectbtn flex gap-2 align-center items-center">
                                    <input type="checkbox" checked={Selected.id === product.id} name="selectItem" className="w-5 h-5 "/>
                                    <span className='text-lg'>{Selected.id === product.id ? "Selected" : "Select"}</span>
                                </div>)
                                } */}

                        <div
                            className={`
    selectbtn flex gap-2 align-center items-center
    transition-all duration-300
    
    `}
                        >
                            <input type="checkbox" checked={Selected.id === product.id} name="selectItem" className="w-5 h-5 " />

                            <span className='text-lg'>{Selected.id === product.id ? "Selected" : "Select"}</span>

                        </div>

                        <div className="relative w-full overflow-hidden rounded-2xl">
                            <img src={product.img} alt={product.title} className='w-full h-50 object-cover rounded-2xl' />


                        </div>
                        <h3 className='text-[#1C3700] font-Inter font-semibold  text-2xl pl-2 text-left'>{product.title}</h3>
                        <p className='text-[#1C3700] font-Inter font-normal text-0.5xl pl-2 pr-2 pb-4 flex-1'>{product.desc}</p>



                    </div>)
                )}
            </div>
        </>
    )
}
export default Cards