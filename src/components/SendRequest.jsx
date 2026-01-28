import React, { useEffect, useState } from 'react'
import {Search} from 'lucide-react'
import '../styles/popup.css'
import '../styles/SendRequest.css'
import { X} from 'lucide-react'
import Cards from './Cards';
import MyItems from '../../public/data/myitems';
import SendReqCards from './SendReqCards';

import { tintContext } from '../App';
import MyCalendar from './Calendar'

const SendRequest = ({ShowSendRequest, setShowSendRequest, ShowCalendar, setShowCalendar, setShowProductInfo}) => {
    const { bgTint, setBgTint } = React.useContext(tintContext);
    const [searchVal, setSearchVal] = useState('')
    const [Selected, setSelected] = useState({})

    
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

    const handleSearch = () => {
            console.log('Searching for:', searchVal);
        }
  return (
    <div className={`popup-box px-38 py-30 ${ShowSendRequest ? '' : 'hidden'}`}>
        <div className="close">
        <X size={30} className='close-icon  hover:cursor-pointer stroke-black bg-gray-300 rounded'  onClick={handleClose}/>
        </div>
        <div className="items ">
            <div className="w-full z-101 sticky top-0 bg-[#EDF4FF] pb-5">

            <div className="search ">
                <Search onClick={handleSearch} size={30} className='search-icon  stroke-gray-500'/>
                <input placeholder='Search from your items...' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') {handleSearch()} }} className='w-full' type="text" />
            </div>


            </div>
<SendReqCards products={MyItems.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()))} setSelected={setSelected} Selected={Selected}/>
    
        </div>
        <div className="next">
            <button 
            onClick={(e) => 
                {e.stopPropagation();
                setShowCalendar(true);}}>Next</button>
        </div>
        {ShowCalendar && <MyCalendar setBgTint={setBgTint} setShowProductInfo={setShowProductInfo} ShowCalendar={ShowCalendar} setShowCalendar={setShowCalendar} setShowSendRequest={setShowSendRequest}/>}
    </div>
  )
}

export default SendRequest