import React from 'react'
import receivedRequests from '../../public/data/reqrecieve';
import ReqRecieveCard from '../components/ReqRecieveCard';

const RequestRecieve = () => {
  return (
    <>
      {receivedRequests.map((req) => (
        <ReqRecieveCard
          key={req.id}
          sellerProduct={req.sellerProduct}
          buyerProduct={req.buyerProduct}
        />
      ))}
    </>
  )
}

export default RequestRecieve