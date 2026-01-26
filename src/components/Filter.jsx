import { useState } from "react";
import { ChevronUp } from 'lucide-react';
const Filter = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return(
        <div className="fixed inset-0 z-50 bg-black/30" onClick={onClose}>
      <div 
        className="absolute top-[30%] right-[10%] w-[320px] bg-[#A2B9F0] p-6 rounded-[40px] shadow-2xl flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-[#05191D] font-semibold text-xl">
          <ChevronUp /> Filters
        </div>

        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {['electronics', 'toys', 'sports', 'kitchen', 'laptop', 'mobiles', 'vintage', 'rare', 'watch', 'random'].map((cat) => (
              <span key={cat} className="bg-white px-3 py-1 rounded-xl text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-50">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Price Range</h3>
          <p className="text-xs text-gray-700 mb-2">0-100000 rs</p>
          <input type="range" className="w-full accent-black" />
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-[#F0F2F5] py-3 rounded-2xl font-bold text-xl text-[#05191D] mt-2 shadow-sm active:scale-95 transition-transform"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default Filter;