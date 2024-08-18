import React, { useContext } from 'react'

function Weekday({date, avgTemp, text}) {

  return (
    <>
      <div className=' w-[120px] h-full p-2'>
        <p className='font-bold'>{date}</p>
        <p className='text-3xl '>{avgTemp}&deg;</p>
        <p className='text-md'>{text}</p>
      </div>
    </>
  )
}

export default Weekday