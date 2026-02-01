import React, { useEffect, useState } from 'react'
import { ArrowRight, MapPin, X } from 'lucide-react';
import '../styles/ReqRecieveCard.css';
import axios from "axios";

const Star = ({ filled = true }) => (
    <svg className="star" viewBox="0 0 24 24" fill={filled ? "#fffb00" : "none"} stroke="#05191d" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
)

const AcceptButton = ({ onClick }) => (
    <button onClick={onClick} className="accept-button">
        <span>Accept</span>
        <ArrowRight className="button-icon" strokeWidth={3} />
    </button>
)

const DeclineButton = ({ onClick }) => (
    <button onClick={onClick} className="decline-button">
        <span>Decline</span>
        <X className="button-icon" strokeWidth={3} />
    </button>
)

async function acceptItem(itemId){
    const response = await axios.post(
        `http://localhost:8000/api/auth/barter/requests/accept/${itemId}/`,
        {},
        { withCredentials: true },
    );

    // console.log(response.data);
}

async function declineItem(itemId) {
    const response = await axios.post(
        `http://localhost:8000/api/auth/barter/requests/decline/${itemId}/`,
        {},
        { withCredentials: true },
    );
    
    // console.log(response.data);
}




const ReqRecieveCard = ({
  sellerProduct = {},
}) => {
  // Handle both nested and flat data structures
  const product = sellerProduct.sellerProduct || sellerProduct;
  const images = product.images || (product.img ? [product.img] : []);
  const name = product.name || product.title || "Product";
  const desc = product.desc || product.description || "No description";
  const seller = product.seller || {};

  useEffect(() => {
    async function getSeller(itemId) {
      if (!itemId) return;
      try {
        const response = await axios.post(
          `http://localhost:8000/api/auth/barter/buyer/${itemId}/`,
          {},
          { withCredentials: true },
        );
    
        setBuyer(response.data);
      } catch (error) {
        console.error('Error fetching buyer:', error);
      }
    }
    getSeller(product.id || product.itemId);
  }, [])
  const [buyer, setBuyer] = useState({})
  

  const onAccept = async () => {
    await acceptItem(product.id || product.itemId);
  };

  const onDecline = async () => {
    await declineItem(product.id || product.itemId);
  };


  const placeholderImg =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="90" height="160"%3E%3Crect fill="%23bebebe" width="90" height="160"/%3E%3C/svg%3E';

  return (
    <div className="req-card-container">
      <div className="req-card-content">
        <div className="seller-product-section">
          <div className="seller-product-card">
            <div className="images-section">
              <div className="main-image">
                <img
                  src={images[0] || placeholderImg}
                  alt={name}
                  className=""
                />
              </div>

              <div className="thumbnails-container">
                {images.map((img, i) => (
                  <div key={i} className="thumbnail-image">
                    <img
                      src={img || placeholderImg}
                      alt={`Thumbnail ${i}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="details-section">
              <div className="title-container">
                <h2 className="product-title">
                  {name}
                </h2>
              </div>

              <div className="description-container">
                <p className="product-description">
                  {desc}
                </p>
              </div>

              <div className="condition-badge-container">
                <button className="condition-badge">
                  {product.condition || "Old"}
                </button>
              </div>

              <div className="seller-info-section">
                <h3 className="seller-info-title">Buyer info:</h3>

                <div className="seller-profile-container">
                  <div className="seller-profile-details">
                    <div className="seller-avatar">
                      <img
                        src={buyer.img || seller.avatar || placeholderImg}
                        alt={buyer.first_name || seller.name || "Seller"}
                      />
                    </div>
                    <p className="seller-name">
                      {buyer.first_name || seller.name || "Name"}
                    </p>
                  </div>

                  {/* <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="star-wrapper">
                        <Star filled={i < (buyer.rating || 4)} />
                      </div>
                    ))}
                  </div> */}
                </div>

                <div className="location-badge">
                  <MapPin className="location-icon" strokeWidth={1.5} />
                  <span className="location-text">
                    {buyer.address1 || "Location"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="swap-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
        <path d="M17.7917 50.8333L5.08337 38.125L17.7917 25.4166L21.35 29.0385L14.8052 35.5833H33.0417V40.6666H14.8052L21.35 47.2114L17.7917 50.8333ZM43.2084 35.5833L39.65 31.9614L46.1948 25.4166H27.9584V20.3333H46.1948L39.65 13.7885L43.2084 10.1666L55.9167 22.875L43.2084 35.5833Z" fill="#05191D"/>
        </svg>
                </div> */}

        <div className="buyer-product-section">
          {/* <div className="buyer-product-card">
                    <h3 className="your-item-title">Your Item</h3>
                    <div className="buyer-product-image">
                    <img src={buyerProduct.img || placeholderImg} alt={buyerProduct.title || "Your item"} />
                    </div>

                    <div className="buyer-product-details">
                    <div className="buyer-title-container">
                        <h4 className="buyer-product-title">{buyerProduct.title || 'Title'}</h4>
                    </div>
                    <div className="buyer-description-container">
                        <p className="buyer-product-description">{buyerProduct.desc || 'description'}</p>
                    </div>
                    </div>
                </div> */}

          <AcceptButton onClick={onAccept} />
          <DeclineButton onClick={onDecline} />
        </div>
      </div>
    </div>
  );
};

export default ReqRecieveCard;