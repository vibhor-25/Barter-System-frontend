import React, { useEffect, useState, useRef } from 'react'
import Menu from '../components/Menu'
import { SquarePen, UserRound, LogOut } from 'lucide-react';
import axios from "../utils/axiosConfig";
import { useNavigate } from 'react-router-dom';
import { checkAuthStatus } from '../utils/authUtils';


const MyProfile = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const isMountedRef = useRef(true);
    const [userData, setUserData] = useState({
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        address1: "",
        address2: "",
        img: ""       
    })

    useEffect(() => {
        const abortController = new AbortController();
        let isAborted = false;
        let loadingTimeout;

        const initProfile = async () => {
            try {
                const { isAuthenticated } = await checkAuthStatus();
                
                if (isAborted) return;

                if (!isAuthenticated) {
                    console.log('User not authenticated, redirecting to login');
                    navigate('/login');
                    return;
                }

                console.log('Fetching user details...');
                const response = await axios.get(
                    "http://localhost:8000/api/auth/user/me/",
                    { 
                        withCredentials: true,
                        signal: abortController.signal 
                    },
                );
                
                if (isAborted) return;
                
                const userData = response.data;
                console.log('Response data:', userData);
                
                if (!userData || Object.keys(userData).length === 0) {
                    console.log('Backend returned empty user data, using fallback...');
                    setUserData({
                        id: "1",
                        email: "user@example.com",
                        first_name: "Demo",
                        last_name: "User",
                        address1: "123 Main St",
                        address2: "New Delhi",
                        img: ""
                    });
                } else {
                    setUserData(userData);
                    console.log('User data set:', userData);
                }
                
                console.log('Setting isLoading to false');
                setIsLoading(false);
                
            } catch (error) {
                if (error.name !== 'CanceledError') {
                    console.error('Error in profile init:', error.response?.status, error.message);
                    if (error.response?.status === 403 || error.response?.status === 401) {
                        console.error('Not authenticated: Redirecting to login');
                        navigate('/login');
                    }
                }
                if (!isAborted) {
                    console.log('Setting isLoading to false (error)');
                    setIsLoading(false);
                }
            }
        };

        initProfile();

        return () => {
            isAborted = true;
            abortController.abort();
        };
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:8000/api/auth/logout/",
                {},
                { withCredentials: true }
            );
            // Clear any stored auth data
            localStorage.clear();
            sessionStorage.clear();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            navigate('/');
        }
    }

    return (
      <div>
        <img
          src="public/images/MenuBg.png"
          alt="Background Image"
          className="fixed top-0 left-0 w-full h-full -z-10 object-cover"
        />
        
        <div className="flex">
          <Menu />
          <div className="flex-1 flex items-center justify-center relative">
            {isLoading && (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
                <div className="text-gray-700 text-lg font-semibold">Loading Profile...</div>
              </div>
            )}
            
            {!isLoading && (
              <div className="w-full">
                <div id="Details" className="pt-10 px-50 ">
                  <div
                    id="h1"
                    className="bg-white rounded w-150 py-3 px-5 text-blue-500 font-bold text-2xl justify-between flex items-center"
                  >
                    Hi {userData.first_name || 'User'}!
                    <SquarePen className="inline-block ml-2 cursor-crosshair text-blue-950"></SquarePen>
                  </div>
                  <div className="h-60 w-60 rounded-full bg-blue-500 mx-auto my-5 flex items-center justify-center">
                    {userData.img ? (
                      <img
                        src={userData.img}
                        alt="User profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <UserRound className="text-black w-40 h-40" />
                    )}
                  </div>
                  <form action="">
                    <ul className="flex flex-col gap-4 text-lg font-Inter">
                      <li className="flex flex-row w-150 justify-between text-xl font-serif font-semibold items-center">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder={userData.first_name + " " + userData.last_name}
                          className="border border-blue-500 rounded px-3 py-2 w-96"
                        />
                      </li>
                      <li className="flex flex-row w-150 justify-between text-xl font-serif font-semibold items-center">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder={userData.email}
                          className="border border-blue-500 rounded px-3 py-2 w-96"
                        />
                      </li>
                      <li className="flex flex-row w-150 justify-between text-xl font-serif font-semibold items-center">
                        <label htmlFor="address">Address:</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          placeholder={userData.address1 + " " + userData.address2}
                          className="border border-blue-500 rounded px-3 py-2 w-96"
                        />
                      </li>
                    </ul>
                    <div className="flex gap-4 mt-8">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center justify-center gap-2 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <LogOut size={20} />
                        Logout
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default MyProfile