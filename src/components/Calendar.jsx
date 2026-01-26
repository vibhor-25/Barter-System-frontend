import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="[&_.react-calendar]:border-none">
      <h2>Selected Date: {date.toDateString()}</h2>
      <Calendar 
        onChange={setDate} 
        value={date} 
      />
    </div>
  );
}
export default Calendar;