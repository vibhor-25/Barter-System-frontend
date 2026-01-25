import React, { useEffect, useState } from 'react'
import '../styles/SendRequest.css'
import { X} from 'lucide-react'

import { tintContext } from '../App';

const SendRequest = ({ShowSendRequest, setShowSendRequest}) => {
    const { bgTint, setBgTint } = React.useContext(tintContext);
    
    const handleClose = () => {
        setBgTint(false);
        setShowSendRequest(false);
    }

    useEffect(() => {
        setBgTint(true);

        const handleDocClick = (e) => {
            const tint = document.getElementById('tint');
            if (ShowSendRequest && tint && tint.contains(e.target)) {
                console.log('Clicked outside');
                handleClose();
            }
        }

        document.addEventListener('click', handleDocClick)
        return () => document.removeEventListener('click', handleDocClick)
    }, [ShowSendRequest])

  return (
    <div className={`popup-box ${ShowSendRequest ? '' : 'hidden'}`}>
        <X size={30} className='close-icon absolute right-5 top-5 hover:cursor-pointer stroke-black bg-gray-300 rounded'  onClick={handleClose}/>
    </div>
  )
}

export default SendRequest
