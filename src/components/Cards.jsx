import React, { useEffect } from "react";
import { useState } from 'react';
import { HeartPlus, Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';
import ProductInfo from "./ProductInfo";
import axios from "axios";


const Cards = ({ products, selectedLoc, showMakeOffer=true, showDistance = true, setCurrentProduct, setShowProductInfo, showWishlist=true, preloadWishlist=false }) => {
    const [hoveredId, setHoveredId] = useState(null);
    const [wishlistItems, setWishlistItems] = useState(() => {
        // Load from wishlistProducts to maintain consistency
        const savedProducts = localStorage.getItem('wishlistProducts');
        if (savedProducts) {
            try {
                const products = JSON.parse(savedProducts);
                return new Set(products.map(p => p.itemId || p.id));
            } catch (error) {
                console.error('Error loading wishlist items:', error);
            }
        }
        return new Set();
    });
    
    const handleOnClick = (product) => {
        setCurrentProduct(product)
        setShowProductInfo(true);
    }

    const handleWishlistClick = async (e, product) => {
        e.stopPropagation();
        
        const newWishlist = new Set(wishlistItems);
        const productId = product.itemId || product.id;
        
        if (newWishlist.has(productId)) {
            newWishlist.delete(productId);
            console.log('Removed from wishlist:', product.name);
        } else {
            newWishlist.add(productId);
            console.log('Added to wishlist:', product.name);
        }
        setWishlistItems(newWishlist);
        
        // Save product objects to localStorage
        const wishlistProducts = products.filter(p => newWishlist.has(p.itemId || p.id));
        localStorage.setItem('wishlistProducts', JSON.stringify(wishlistProducts));
        localStorage.setItem('wishlistItems', JSON.stringify(Array.from(newWishlist)));

        try {
            await axios.post(
                `http://localhost:8000/api/auth/barter/wishlist/${product.itemId}/`,
                {},
                { withCredentials: true }
            );
        } catch (error) {
            console.error('Error updating wishlist:', error.message);
        }
    };

    return (
      <>
        <div className="flex justify-center gap-7 flex-wrap my-5 p-5 mx-15 rounded-lg shadow-lg">
          {products.map(
            (product) =>
              (selectedLoc === "All Locations" ||
                (product.loc && product.loc.city === selectedLoc)) && (
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
                      src={product.images?.[0] || product.img || "https://via.placeholder.com/400"}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Show heart button only when showWishlist is true */}
                    {showWishlist && (
                      <div onClick={(e) => handleWishlistClick(e, product)}>
                        {wishlistItems.has(product.itemId || product.id) ? (
                          <Heart
                            className={`absolute size-7 shadow-lg top-2 right-2 cursor-pointer bg-white p-1 font-semibold rounded-full text-red-500 fill-red-500`}
                          />
                        ) : (
                          <HeartPlus
                            className={`absolute size-7 shadow-lg top-2 right-2 cursor-pointer bg-white p-1 font-semibold rounded-full text-gray-400 hover:text-red-500`}
                          />
                        )}
                      </div>
                    )}

                    <div
                      className={`absolute bottom-1 right-1 bg-[#FFDBC5] text-[#442600] flex items-center gap-1 px-2 py-0.5 rounded-full ${showDistance ? "" : "hidden"}`}
                    >
                      <MapPin className="size-4" />
                      <span className="text-sm">
                        {((String(product.itemId || product.id).charCodeAt(0)) % 50) + 1 + " km away"}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#1C3700] font-Inter font-semibold  text-2xl pl-2 text-left">
                    {product.name}
                  </h3>
                  <p className="text-[#1C3700] font-Inter font-normal text-0.5xl pl-2 pr-2 pb-4 flex-1">
                    {product.desc || product.description}
                  </p>
                  <span
                    className={`mt-auto inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[12px] font-medium tracking-tight ${(product.statusi || product.condition === "Used") ? "bg-[#C2D1FF] text-[#001D6E]" : "bg-[#D1FFC2] text-[#1C3700]"}
                       ${hoveredId === product.itemId ? "opacity-0" : "opacity-100"}`}
                  >
                    {product.statusi ? "Used" : product.condition || "New"}
                  </span>

                  {showMakeOffer && (
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#3F51B5] text-white font-semibold py-2 rounded-lg opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:cursor-pointer">
                      Make an offer
                    </button>
                  )}
                </div>
              ),
          )}
        </div>
      </>
    )
}

export default Cards;