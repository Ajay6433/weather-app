import React from 'react'
import { LiaCloudShowersHeavySolid } from "react-icons/lia";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Card({day}) {
  const {weatherData, time} = useContext(AppContext);
  return (
    <> 
       <div className='h-[330px] text-center p-2 mt-4'>
            <div>
                <p className='text-2xl font-semibold'>{day}</p>
                <p className='font-semibold'>Last Updated <span>{time}</span></p>
            </div>
            <div className='mt-5 font-semibold'>
                <div className='flex justify-center mt-4'>
                    <p className='text-6xl'>{weatherData.temp_c} &deg;</p>
                    <span className='text-4xl'><LiaCloudShowersHeavySolid /></span>
                </div>
                <div className='mt-2 font-normal'>
                    <p>Precip: <span>{weatherData.precip_mm}%</span></p>
                    <p>Humidity: <span>{weatherData.humidity}%</span></p>
                    <p>Wind: <span>{weatherData.wind_kph} Kph</span></p>
                </div>
            </div>
       </div>
    </>
  )
}

export default Card