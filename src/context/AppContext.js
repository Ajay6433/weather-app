import { createContext, useState, useEffect } from "react";
import axios from 'axios';

//Creating context
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [weatherData , setWeatherData ] = useState("");
    const [locationData, setLocationData] = useState({});
    const [forecastData, setForecastData] = useState([]);
    const [date, setDate] = useState('');
    const [day, setDay] = useState('2024-01-01');
    const [time, setTime] = useState('');
    const [todayForecast , setTodayForecast] = useState([]);
    const [weatherCondition, setWeatherCondition] = useState('patchy-rain-nearby-');

    
    
    async function fetchData(){
            try{
                setLoading(true);
                // const url = `http://api.weatherapi.com/v1/forecast.json?key=963f8c6227664987add155506242907&q=india&days=7&aqi=no&alerts=no`;
                const url = `https://api.weatherapi.com/v1/forecast.json?key=50225084acd34795ad674651241308&q=India&days=7&aqi=no&alerts=no`;
                const response = await axios.get(url);
                const location = response.data.location;
                const weather = response.data.current;
                const forecast = response.data.forecast.forecastday;
                const today = response.data.forecast.forecastday[0].date;
                const hourlyForecast = response.data.forecast.forecastday[0].hour;
                const mainText = weather.condition.text.toLowerCase().replace(/ /g, '-');
                setWeatherData(weather);
                setLocationData(location);
                setForecastData(forecast);
                setTodayForecast(hourlyForecast);
                setWeatherCondition(mainText);
                // console.log(response);
                
                // console.log(today);
                // console.log(mainText)
                
                //Local date is sliced from the API call result of localtime with date.
                const localTimeAndDate = location.localtime;
                const localDate = localTimeAndDate.slice(0,10);
                const localTime = localTimeAndDate.slice(10,16);
                setDay(today);
                setTime(localTime);
                setDate(localDate);
                setLoading(false);
            }
            catch(error){
                // console.error('Error fetching the time data:', error);
                setLoading(false);
                setDate("Unable to fetch Date right now");
            }
          }
        //   console.log(locationData);
        //   console.log(weatherData);
        
        
        useEffect(()=>{
           fetchData();
        },[])

    const value = {
        loading,
        setLoading,
        weatherData,
        setWeatherData,
        locationData,
        setLocationData,
        forecastData,
        setForecastData,
        todayForecast,
        setTodayForecast,
        weatherCondition,
        setWeatherCondition,
        day,
        setDay,
        date,
        setDate,
        time,
        setTime,
        fetchData
    };

    //providing context
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>

}