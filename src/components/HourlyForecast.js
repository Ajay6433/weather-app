import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function HourlyForecast() {

  const {todayForecast} = useContext(AppContext);

  return (
    <>
     {
      todayForecast.map((hour, index)=>{
        const timeOnly = hour.time.split(' ')[1];
        const dateOnly = hour.time.split(' ')[0];
        return(
          <div key={index} className=' w-[90px] h-[100px p-2'>
          <p className='text-sm'>{timeOnly}</p>
          <p className='text-2xl font-semibold'>{hour.temp_c}</p>
          <p className='text-xs'>{dateOnly}</p>
        </div>
        );
      })
     }
    </>
  )
}

export default HourlyForecast