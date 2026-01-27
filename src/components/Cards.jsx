import React, { useEffect } from "react";
import { useState } from 'react';
import { HeartPlus } from 'lucide-react';
import { MapPin } from 'lucide-react';
import axios from "axios";


const Cards = ({ products, selectedLoc,showMakeOffer=true, showDistance = true, setCurrentProduct, setShowProductInfo }) => {
    
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

    const [hoveredId, setHoveredId] = useState(null);

    const handleOnClick = (product) => {
        setCurrentProduct(product)
        setShowProductInfo(true);

    }

    return (
      <>
        <div className="flex justify-center gap-7 flex-wrap my-5 p-5 mx-15 rounded-lg shadow-lg">
          {products.map(
            (product) =>
              (selectedLoc === "All Locations" ||
                product.loc.city === selectedLoc) && (
                <div
                  key={product.itemId}
                  onMouseEnter={() => setHoveredId(product.itemId)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOnClick(product)}
                  className="hover:cursor-pointer card w-61 h-auto p-2 rounded-2xl flex flex-col gap-3 items-start shadow-md hover:scale-102 hover:-translate-y-2 transition-transform duration-300 group relative"
                  style={{
                    background:
                      hoveredId === product.itemId
                        ? "linear-gradient(to bottom right, rgba(111, 133, 235, 1), rgba(112, 255, 217, 1))"
                        : "rgba(237,244,266,1)",
                  }}
                >
                  <div className="relative w-56 h-50">
                    <img
                    //   src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {"statusi" in product && (
                      <HeartPlus
                        className={`absolute size-7 shadow-lg top-2 right-2 cursor-cell bg-white p-1 font-semibold rounded-full ${product.condition ? "text-red-500" : "text-gray-400"}`}
                      />
                    )}

                    <div
                      className={`absolute bottom-1 right-1 bg-[#FFDBC5] text-[#442600] flex items-center gap-1 px-2 py-0.5 rounded-full ${showDistance ? "" : "hidden"}`}
                    >
                      <MapPin className="size-4" />
                      {/* <span className="text-sm">
                        {Math.floor(Math.random() * product.id) +
                          1 +
                          " km away"}
                      </span> */}
                    </div>
                  </div>
                  <h3 className="text-[#1C3700] font-Inter font-semibold  text-2xl pl-2 text-left">
                    {product.name} Product Name here
                  </h3>
                  <p className="text-[#1C3700] font-Inter font-normal text-0.5xl pl-2 pr-2 pb-4 flex-1">
                    {product.description}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[12px] font-medium tracking-tight ${product.statusi ? "bg-[#C2D1FF] text-[#001D6E]" : "bg-[#D1FFC2] text-[#1C3700]"}
                       ${hoveredId === product.itemId ? "opacity-0" : "opacity-100"}`}
                  >
                    {product.condition ? "Used" : "New"}
                  </span>

                  {showMakeOffer && (
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#3F51B5] text-white font-semibold py-2 rounded-lg opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer">
                      Make an offer
                    </button>
                  )}
                </div>
              ),
          )}
          {/* {ShowProductInfo && <ProductInfo product={product} ShowProductInfo={ShowProductInfo} setShowProductInfo={setShowProductInfo} />} */}
        </div>
      </>
    );
}
export default Cards