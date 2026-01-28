import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

const MyCalendar = ({ ShowCalendar, setShowCalendar, setShowSendRequest, setShowProductInfo, setBgTint }) => {
  const [date, setDate] = useState(new Date());


  return (
    <div className="p-6 bg-white rounded-4xl shadow-sm max-w-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2000">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Select Pick Up:</h2>
      
      <Calendar 
        onChange={setDate} 
        value={date}
        className="custom-calendar" 
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={true}
      />

      <button className="w-full mt-6 bg-[#ff5a5f] text-white py-4 rounded-2xl font-bold text-lg" onClick={() => {setShowCalendar(false); setShowSendRequest(false); setShowProductInfo(false); setBgTint(false);}}>
        Confirm
      </button>
    </div>
  );
}
export default MyCalendar;