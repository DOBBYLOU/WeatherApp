import Weather from './components/app/Weather/Weather';
import WeatherContext from './context/Context';
import './App.css';
import { useState } from 'react';

function App() {
  const API_KEY = 'ebfd74c64e2d71d23e882acd2e188a20';

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(null);

  const [loading, setLoading] = useState(false);

  const APIFunc = async (city) => {
    try {
      setLoading(true);
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (weatherRes.ok && forecastRes.ok) {
        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        setWeatherInfo(weatherData);
        setForecastInfo(forecastData.list);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByDate = (date) => {
    const WeatInfo = forecastInfo?.find((item) => item.dt_txt.startsWith(date));
    return WeatInfo?.main?.temp;
  };

  return (
    <>
      <WeatherContext.Provider
        value={{
          weatherInfo,
          forecastInfo,
          loading,
          APIFunc,
          getWeatherByDate,
        }}
      >
        <Weather />
      </WeatherContext.Provider>
    </>
  );
}

export default App;
