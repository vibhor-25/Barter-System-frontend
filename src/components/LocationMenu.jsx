import { MapPin } from 'lucide-react';
import '../styles/LocationMenu.css';

const LocationMenu = () => {
  return (
    <div id='filters' className='flex justify-center bg-[#caf1fd] border-blue-800 border items-center font-Inter rounded-4xl gap-2 w-full lg:w-auto'>
              <MapPin className='ml-2' size={20} />
              <input type="text" placeholder="Location" className='font-Inter py-2 px-3 sm:px-5 border-none font-semibold text-black rounded-full w-full sm:w-40' />
            </div>
  )
}

export default LocationMenu
