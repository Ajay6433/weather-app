import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
function Main() {

  const {weatherData, weatherCondition, setWeatherCondition, todayForecast} = useContext(AppContext);

  const currentWeatherText = {
    sunny: "Enjoy the sunshine today! It's a great day to be outdoors.",
    Cloudy: "Expect some sun with a few clouds. It's a nice day for outdoor activities.",
    Rainy: "Rain is expected, Don't forget your umbrella!",
    Windy: "Hold onto your hat, it's windy!",
    Overcast: "Cloudy skies ahead keep an umbrella handy just in case!",
    Thunder: "Thunderstorms expected. Stay indoors and unplug electronics.",
    Mist: "Visibility is reduced due to mist. Drive carefully and use low-beam headlights."
  }
  
  
  //Code to find out the time to match the current weather of the hour.
  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
  const day = String(currentDateTime.getDate()).padStart(2, '0');
  const hour = String(currentDateTime.getHours()).padStart(2, '0');
  const currentTime = `${year}-${month}-${day} ${hour}:00`;

  // console.log(currentTime);

  todayForecast.find(item => {
   if( item.time === currentTime)
   {
    const txt = item.condition.text.toLowerCase().replace(/ /g, '-');
    // console.log(txt);
    setWeatherCondition(txt);
   }
  });


  return (
        <div className={` ${weatherCondition} w-[700px] min-h-[450px] h-[450px] overflow-hidden flex justify-center items-center bg-slate-700 mv-main`}>
            <div className='text-white w-[600px] h-[350px] p-4 flex flex-col justify-around items-center mv-main-text'>
              <div>
                <p className='text-9xl flex mt-3 mv-main-temp'>{weatherData.temp_c}<span className='text-7xl'>&deg;</span></p>
              </div>
              <div className='text-center'>
                <p>{weatherCondition ? weatherCondition.toUpperCase().replace(/-/g, ' ') : "Unavailable"}</p>
                <p>Feels Like <span>{weatherData.feelslike_c}</span></p>
              </div>
              <div className='text-center text-sm'>
                <p className='mb-2'>Quick Update</p>
                {
                  weatherCondition.includes('cloudy') ? (currentWeatherText.Cloudy) : (
                    weatherCondition.includes('rain') ? (currentWeatherText.Rainy) : (
                      weatherCondition.includes('clear') ? (currentWeatherText.sunny) : (
                        weatherCondition.includes('overcast') ? (currentWeatherText.Overcast) : (
                          weatherCondition.includes('shower') ? (currentWeatherText.Rainy) : (
                            weatherCondition.includes('thunder') ? (currentWeatherText.Thunder) : (
                              weatherCondition.includes('mist') ? (currentWeatherText.Mist) : "Unavailable right now"
                            )
                          )
                        )
                      )
                    )
                  )
                }
              </div>
            </div>
        </div>
  )
}

export default Main