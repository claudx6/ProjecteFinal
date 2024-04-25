import React, { useEffect, useState } from 'react';
import { getWeatherByCityName } from '../services/services';

function WeatherAPI() {
  const [weather,setWeather] = useState({
    "weather": [
        {
            "main": "",
            "description": "",
            "icon": ""
        }
    ],
    "main": {
        "temp": 0,
        "humidity": 0,
    },
    "name": "",
});
  const [isLoading,setLoading] = useState(false);
  const getWeather = async (cityName) => {
    try {
      setLoading(true)
      const response = await getWeatherByCityName(cityName);
      if(response.data.data) {
        console.log(response.data.data)
        setWeather(response.data.data)
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }
  useEffect(()=>{
    getWeather('Barcelona')
  },[])
  return (
    <>
    {isLoading ? 'Cargando...' : <div className="card text-center weather-card">
      <div className="card-body">
        <h5 className="card-title">{weather.name}</h5>
        <div className="weather-info">
          <img
            style={{width : '35px'}}
            src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
            alt={weather?.weather[0]?.description}
          />
          <p className="temperature">{weather?.main?.temp}°C</p>
          <p className="weather-description">{weather?.weather[0]?.description}</p>
          <p className="humidity">Humidity: {weather?.main?.humidity}%</p>
        </div>
      </div>
    </div>}
    </>
  );

}

export default WeatherAPI;
