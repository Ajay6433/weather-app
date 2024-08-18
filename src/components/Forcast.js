import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import HourlyForecast from './HourlyForecast';

function Forcast() {

  return (
    <div className='h-[320px] text-center'>
        <p className='font-semibold'>24H Weather Forcast</p>
        <div className='w-[350px h-[280px] p-3 flex flex-wrap justify-between overflow-auto'>
            <HourlyForecast/>
        </div>
    </div>
  )
}

export default Forcast