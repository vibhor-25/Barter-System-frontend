import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());


  return (
    <div className="p-6 bg-white rounded-[32px] shadow-sm max-w-sm position-absolute top-1/2 z-2000">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Select Pick Up:</h2>
      
      <Calendar 
        onChange={setDate} 
        value={date}
        className="custom-calendar" 
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={true}
      />

      <button className="w-full mt-6 bg-[#ff5a5f] text-white py-4 rounded-2xl font-bold text-lg">
        Confirm
      </button>
    </div>
  );
}
export default MyCalendar;