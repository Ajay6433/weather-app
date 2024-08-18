import React, {useContext, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

function Header() {
    const [isToggled , setIsToggled] = useState(false);
    const {locationData, loading, date} = useContext(AppContext);

    // Function to toggle the mode to dark mode
    function clickHandler(){
        setIsToggled(!isToggled);
        let element = document.querySelector('body');
        element.classList.toggle("dark");
    }
    
    return (
        <div className='flex w-full h-14 justify-between p-3 items-center mv-header'>
            <div>
                <p>{locationData.name}</p>
            </div>
            <div className='mv-date'>
                {
                        loading ? <Spinner/> : (<p>{date}</p>)
                }
            </div>
            <div  onClick={clickHandler} className='toggle-container mv-toggle-container'>
                <div className={`toggle-button mv-toggle-button ${isToggled ? "on" : ""}`}>
                    {isToggled ? <FaMoon /> : <FaSun />}
                </div>
            </div>
            
        </div>
    )
}

export default Header