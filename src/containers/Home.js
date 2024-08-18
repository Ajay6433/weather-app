import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Weekdays from '../components/Weekdays'


function Home() {
  return (
    <>
      <div className='w-[890px] h-screen max-h-[650px] flex flex-col justify-between items-center mv-main'>
      <Header/>
      <Main/>
      <Weekdays/>
      </div>
    </>
  )
}

export default Home