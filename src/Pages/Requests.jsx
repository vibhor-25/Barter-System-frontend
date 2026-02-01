import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import ReqCard from '../components/ReqCard';
import RequestRecieve from './RequestRecieve';
import '../styles/request.css';
import axios from "axios";
import sentRequestsData from '../../public/data/reqsent';


const Requests = () => {
    const [sentRequests, setSentRequests] = useState(sentRequestsData);

    
    useEffect(() => {
        async function getPendingRequests() {
            try {
                const response = await axios.get(
                  "http://localhost:8000/api/auth/barter/pending-requests/",
                  { withCredentials: true },
                );
                
                const itemsArray = Object.values(response.data);
                if (itemsArray.length === 0) {
                    console.log('Backend returned empty requests, using sample data...');
                    setSentRequests(sentRequestsData);
                } else {
                    setSentRequests(itemsArray);
                }
                console.log(itemsArray)
            } catch (error) {
                console.error('Error fetching pending requests:', error.message);
                console.log('Using sample data as fallback...');
                setSentRequests(sentRequestsData);
            }
        }
        getPendingRequests();
    }, [])

    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
        <img src='/images/MenuBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover' />
        <Menu />
        <div className='optiondiv'>
            <div className={`active-pill ${activeTab === 0 ? 'left' : 'right'}`} />
            <div className='receiveddiv' onClick={() => { console.log("Received Clicked"); setActiveTab(0) }}>
            <h1 className='received'>Received</h1>
            </div>
            <div className='sentdiv' onClick={() => { console.log("Sent Clicked"); setActiveTab(1); }}>
            <h1 className='sent'>Sent</h1>
            </div>
        </div>
        <div className='sentrequestsdiv'>
            {activeTab === 1 ? (
            sentRequests.map((item) => (
                <ReqCard key={item.id || item.itemId} product={item} />
            ))
            ) : (
            <RequestRecieve/>
            )}
        </div>

        </div>
    )
}

export default Requests