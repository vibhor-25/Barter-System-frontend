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
    },[])

    document.addEventListener('click', (e) => {
        const tint = document.getElementById('tint');
        if ((tint.contains(e.target))) {
            console.log("Clicked outside");
            handleClose();
        }
    })

  return (
    <div className={`popup-box ${ShowSendRequest ? '' : 'hidden'}`}>
        <X size={30} className='close-icon absolute right-5 top-5 hover:cursor-pointer stroke-black bg-gray-300 rounded'  onClick={handleClose}/>
    </div>
  )
}

export default SendRequest
