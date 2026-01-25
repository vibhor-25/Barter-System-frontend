import { useState, useEffect } from 'react';
import { MapPin, Crosshair, Triangle } from 'lucide-react';
import data from '../../public/data/data';
import '../styles/LocationMenu.css';


const LocationMenu = ({ selectedLoc, setSelectedLoc }) => {

    const [locMenuHidden, setLocMenuHidden] = useState(true);

    const handleCurrentLocation = () => {

        //api to get current location from ip
        setSelectedLoc('Loading...');
        fetch("https://ipapi.co/json/")
            .catch(() => {
                fetch("https://ipapi.co/json/")
                    .catch(() => setSelectedLoc('Location Unavailable'))
                    .then(res => res.json())
                    .then(data => setSelectedLoc(data.city));
            })
            .then(res => res.json())
            .then(data => setSelectedLoc(data.city));


    }


    //hide on clicking outside
    document.addEventListener('click', (e) => {
        const locationBox = document.querySelector('.location-box');
        if (locationBox && !locationBox.contains(e.target)) {
            setLocMenuHidden(true);
        }
    })

    // alphabetical order of list of cities present in data.js
    let cities = []
    data.forEach(item => {
        if (!cities.includes(item.loc.city)) {
            cities.push(item.loc.city);
        }
    });
    cities.sort();

    return (
        <div className="location-box" onClick={() => setLocMenuHidden(!locMenuHidden)}   >
            <div id='filters' className='flex justify-center bg-[#caf1fd] border-blue-800 border items-center font-Inter rounded-4xl gap-2 w-full lg:w-auto'>
                <MapPin className='ml-2' size={20} />
                {/* <input type="text" placeholder="Location" defaultValue={''} value={selectedLoc} className='font-Inter py-2 px-3 sm:px-5 border-none font-semibold text-black rounded-full w-full h-10 sm:w-40' /> */}
                <p className='font-Inter py-2 px-3 sm:px-5 border-none font-semibold text-black rounded-full w-full h-10 sm:w-40' >{selectedLoc}</p>
                <Triangle className='mr-2 fill-black rotate-180' size={12} />
            </div>
            <div className={`dropdown w-full lg:w-auto ${locMenuHidden ? 'hidden' : ''}`}>
                <div onClick={handleCurrentLocation} className="dropdown-item flex text-[#2947D8]" >
                    <Crosshair className='mr-2' size={20} />
                    <p>Use Current Location</p>
                </div>
                <div className="dropdown-item" onClick={() => setSelectedLoc('All Locations')}>
                    All Locations
                </div>
                {cities.map((city, index) => (
                    <div key={index} className="dropdown-item" onClick={() => setSelectedLoc(city)}>
                        {city}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LocationMenu
