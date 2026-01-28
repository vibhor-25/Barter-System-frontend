import React, { useEffect, useState } from "react";
import "../styles/popup.css";
import { X } from "lucide-react";
import { MapPin } from "lucide-react";
import { Heart } from "lucide-react";
import { tintContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const [seller, setSeller] = useState({});

const ProductInfo = ({
  product,
  ShowProductInfo,
  setShowProductInfo,
  ShowSendRequest,
  setShowSendRequest,
}) => {
  const navigate = useNavigate();
  const handleDivClick = () => {
    setBgTint(false);
    navigate("/wishlist");
  };
  const { bgTint, setBgTint } = React.useContext(tintContext);

  const handleClose = () => {
    setBgTint(false);
    setShowProductInfo(false);
  };

  const [seller, setSeller] = useState({})

  useEffect(() => {
    setBgTint(true);

    async function getSeller(itemId) {
      const response = await axios.post(
        `http://localhost:8000/api/auth/barter/seller/${itemId}/`,
        {},
        { withCredentials: true },
      ).then((data) => {
        console.log(data.data);
        setSeller(data.data)
      })

    }
    getSeller(product.itemId);


    const handleDocClick = (e) => {
      const tint = document.getElementById("tint");
      if (ShowProductInfo && tint && tint.contains(e.target)) {
        console.log("Clicked outside");
        handleClose();
      }
    };

    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, [ShowProductInfo]);

  return (
    <div
      className={`popup-box ${ShowProductInfo ? "" : "hidden"} !flex !flex-row p-8 gap-10 bg-white rounded-3xl max-w-4xl relative`}
    >
      <X
        size={30}
        className="close-icon absolute right-5 top-5 hover:cursor-pointer stroke-black bg-gray-300 rounded"
        onClick={handleClose}
      />

      <div className="w-1/2 flex flex-col gap-4 shrink-0">
        <img
          src={product.images[0]}
          className="w-full h-[73%] object-cover rounded-2xl shadow-sm"
        />
        <div className="flex flex-row gap-4 overflow-x-auto py-2 no-scrollbar">
          {product.images.map((url, index) => (
            <div
              key={index}
              className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-transparent hover:border-blue-500 cursor-pointer"
            >
              <img src={url} alt=" " className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col ">
        <p className="font-Inter font-semibold text-4xl pt-7 ">
          {product.name}
        </p>
        <p className="font-Inter font-regular text-xl pt-2 pb-40">
          {product.description}
        </p>
        <div className="flex flex-row justify-end gap-2">
          <div className="text-[15px] font-semibold px-2 rounded-sm bg-[#000000] text-white">
            <p>{product.price} rs</p>
          </div>
          <div
            className={`text-[15px] font-semibold ${product.condition ? "bg-[#C2D1FF] text-[#001D6E]" : "bg-[#D1FFC2] text-[#1C3700]"} px-2 rounded-sm`}
          >
            {product.condition ? "Used" : "New"}
          </div>
        </div>
        <h1 className="font-semibold font-Inter text-xl">Seller info:</h1>
        <div className="flex flex-row mt-2 items-center">
          <img
            src={seller.img}
            className="w-16 h-auto rounded-full object-cover"
          />
          <p className="pl-5 text-xl font-Inter font-semibold ">
            {toString(seller.first_name) + toString(seller.last_name)}
          </p>
        </div>
        <div className="flex flex-row mt-4 items-center mb-2">
          <MapPin
            size={28}
            className="text-black rounded-l-lg bg-[rgba(255,177,143,1)] p-1 "
          />
          <p className=" font-regular rounded-r-lg bg-[rgba(255,177,143,1)] text-xl px-2">
            {seller.address1}
          </p>
        </div>
        <div className="mb-10">
          <span>Tags:</span>
          <div className="flex flex-row"></div>
        </div>
        <button
          onClick={() => setShowSendRequest(true)}
          className="w-full bg-[rgba(41,71,216,1)] rounded-lg text-xl p-2 text-white font-Inter font-semibold cursor-pointer"
        >
          Request
        </button>
        <button
          onClick={handleDivClick}
          className="w-full flex items-center justify-center bg-white rounded-lg text-xl p-2 text-black font-Inter font-semibold cursor-pointer border-2 mt-4"
        >
          <Heart size={30} className="text-black pr-2 text-bold" />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;