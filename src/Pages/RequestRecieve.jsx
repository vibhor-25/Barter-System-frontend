import React, { useEffect, useState } from "react";
// import receivedRequests from '../../public/data/reqrecieve';
import ReqRecieveCard from '../components/ReqRecieveCard';
import axios from "axios";

const RequestRecieve = ({}) => {
  const [receivedRequests, setReceivedRequests] = useState([]);

  useEffect(() => {
    async function getRequests() {
        const response = await axios.get(
            "http://localhost:8000/api/auth/barter/requests/",
            { withCredentials: true },
        );

        const itemsArray = Object.values(response.data);
        setReceivedRequests(itemsArray);
        console.log(itemsArray)
    }
    getRequests();
  }, []);

  return (
    <>
      {receivedRequests.map((req) => (
        <ReqRecieveCard key={req.itemId} sellerProduct={req} />
      ))}
    </>
  );
};

export default RequestRecieve