import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyEvents() {
  const styles = {
    fontFamily: 'Lato',
    fontSize: '1.5rem',
    fontWeight: '900'
  }
  const allMonthValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState();

  // State for text above calander
  const [calendarText, setCalendarText] = useState(`No Date is selected`);

  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    setSelectedDate(value);
    setCalendarText(`The selected Date is ${value.toDateString()}`);
  };

  // Function to handle selected Year change
  const handleYearChange = (value) => {
    const yearValue = value.getFullYear();
    setCalendarText(`${yearValue} Year  is selected`);
  };

  // Function to handle selected Month change
  const handleMonthChange = (value) => {
    const monthValue = allMonthValues[value.getMonth()];
    setCalendarText(`${monthValue} Month  is selected`);
  }; 
 
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col p-3">
        <div className="calendar-container">
    <h2 className="calander-details" style={styles}>{calendarText}</h2>
    <Calendar className="custom-calendar"
      onClickMonth={handleMonthChange}
      onClickYear={handleYearChange}
      onChange={handleDateChange}
      value={selectedDate}
    />
  </div>
        </div>
        <div className="col p-3 events-container">
          Events
          <div></div>
          <div></div>
          <div></div>
          
        </div>
      </div>
    </div>
   
  </>
  )
}
