import { useState } from "react";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export default function useWeather () {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchWeather = async (city) => {
       try {
        setLoading(true);
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        if(!response.ok){
          throw new Error("City not found");
        }
        const responseData = await response.json();
        setData(responseData);
        } catch (error) {
            setLoading(false);
            setData(null);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {data, loading, error, fetchWeather};
}