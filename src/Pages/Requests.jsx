import React, { useState } from 'react'
import Menu from '../components/Menu'
import ReqCard from '../components/ReqCard';
import sentRequests from '../../public/data/reqsent';
import RequestRecieve from './RequestRecieve';
import '../styles/request.css';
const Requests = () => {
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
            <ReqCard key={item.id} product={item} />
          ))
        ) : (
         <RequestRecieve/>
        )}
      </div>

    </div>
  )
}

export default Requests