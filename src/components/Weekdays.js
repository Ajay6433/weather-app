import React, { useContext } from 'react'
import Weekday from './Weekday'
import { AppContext } from '../context/AppContext'

function Weekdays({forecast}) {
  const {forecastData} = useContext(AppContext);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' }; // Options to get the full name of the day
    return new Intl.DateTimeFormat('en-US', options).format(date); // Use Internationalization API
  };
  
  return (
    <div className='h-[130px] w-full p-2 flex justify-around text-center mv-weekdays'>
      {
        forecastData.map((day, index)=>(
          <Weekday 
          key={day.date}
          date={index === 0 ? "Today" : getDayOfWeek(day.date)}
          avgTemp={day.day.avgtemp_c}
          text={day.day.condition.text}/>
          // console.log("Printing from the map funtion")
        ))
      }
    </div>
  )
}

export default Weekdays