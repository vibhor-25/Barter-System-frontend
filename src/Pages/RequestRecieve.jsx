import React, { useEffect, useState } from "react";
import receivedRequestsData from '../../public/data/reqrecieve';
    import ReqRecieveCard from '../components/ReqRecieveCard';
    import axios from "axios";

const RequestRecieve = ({}) => {
  const [receivedRequests, setReceivedRequests] = useState(receivedRequestsData);

  useEffect(() => {
    async function getRequests() {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/auth/barter/requests/",
                { withCredentials: true },
            );

            const itemsArray = Object.values(response.data);
            if (itemsArray.length === 0) {
                console.log('Backend returned empty received requests, using sample data...');
                setReceivedRequests(receivedRequestsData);
            } else {
                setReceivedRequests(itemsArray);
            }
            console.log(itemsArray)
        } catch (error) {
            console.error('Error fetching received requests:', error.message);
            console.log('Using sample data as fallback...');
            setReceivedRequests(receivedRequestsData);
        }
    }
    getRequests();
  }, []);

  return (
    <>
      {receivedRequests.map((req) => (
        <ReqRecieveCard key={req.id || req.itemId} sellerProduct={req} />
      ))}
    </>
  );
};

export default RequestRecieve