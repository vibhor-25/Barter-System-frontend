import React from 'react'
import Menu from '../components/Menu'
import ReqCard from '../components/ReqCard';
import sentRequests from '../../public/data/reqsent';
import '../../src/request.css';
const Requests = () => {
  
  return (
    <div>
        <img src = '/images/MenuBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
        <Menu />
        <div className='optiondiv'>
          <div className='receiveddiv'>
          <h1 className='received'>Received</h1>
          </div>
          <div className='sentdiv'>
          <h1 className='sent'>Sent</h1>
          </div>
        </div>
        <div className='sentrequestsdiv'>
          {sentRequests.map((item) => (
            <ReqCard key={item.id} product={item} />
          ))}
        </div>
      
    </div>
  )
}

export default Requests