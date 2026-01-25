import React, { useEffect, useState } from 'react'
import '../styles/AddItem.css'
import { X} from 'lucide-react'

import { tintContext } from '../App';

const AddItem = ({ShowAddItem, setShowAddItem}) => {
    const { bgTint, setBgTint } = React.useContext(tintContext);
    
    const handleClose = () => {
        setBgTint(false);
        setShowAddItem(false);
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
    <div className={`popup-box ${ShowAddItem ? '' : 'hidden'}`}>
        <X size={30} className='close-icon absolute right-5 top-5 hover:cursor-pointer stroke-black bg-gray-300 rounded'  onClick={handleClose}/>
    </div>
  )
}

export default AddItem
