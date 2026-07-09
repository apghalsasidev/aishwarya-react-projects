import { useState } from "react";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export default function useWeather () {
    const [data, setData] = useState(null);
    const fetchWeather = async (city) => {
       try {
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        if(!response.ok){
            console.log("city not found");
        }
        const responseData = await response.json();
        setData(responseData);
       } catch (error) {
            console.log(error);
       }
        
    }
    return {data, fetchWeather};
}   