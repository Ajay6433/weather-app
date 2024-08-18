import React, { useContext } from 'react'
import Card from '../components/Card'
import Forcast from '../components/Forcast'
import { AppContext } from '../context/AppContext';
function Sidebar() {

  const {day} = useContext(AppContext);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long' }; // Options to get the full name of the day
    return new Intl.DateTimeFormat('en-US', options).format(date); // Use Internationalization API
  };
  
  return (
    <div className='max-w-[380px] h-screen w-[350px] max-h-[650px] '>
      <Card
      day={getDayOfWeek(day)}/>
      <Forcast/>
    </div>
  )
}

export default Sidebar