import React, { useEffect, useState } from 'react'
import '../styles/popup.css'
import { X} from 'lucide-react'

import { tintContext } from '../App';

const ProductInfo = ({product, ShowProductInfo, setShowProductInfo}) => {




    // HI ARJUN, USE THE PRODUCT PROP TO SHOW DETAILS OF THE PRODUCT IN THE POPUP



    const { bgTint, setBgTint } = React.useContext(tintContext);
    
    const handleClose = () => {
        setBgTint(false);
        setShowProductInfo(false);
    }

    useEffect(() => {
        setBgTint(true);

        const handleDocClick = (e) => {
            const tint = document.getElementById('tint');
            if (ShowProductInfo && tint && tint.contains(e.target)) {
                console.log('Clicked outside');
                handleClose();
            }
        }

        document.addEventListener('click', handleDocClick)
        return () => document.removeEventListener('click', handleDocClick)
    }, [ShowProductInfo])

  return (
    <div className={`popup-box ${ShowProductInfo ? '' : 'hidden'}`}>
        <X size={30} className='close-icon absolute right-5 top-5 hover:cursor-pointer stroke-black bg-gray-300 rounded'  onClick={handleClose}/>
        <p>{product.title}</p>
        <p>{product.desc}</p>
        
    </div>
  )
}

export default ProductInfo
