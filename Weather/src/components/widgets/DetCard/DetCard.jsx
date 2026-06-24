import { useContext } from 'react';
import Styles from './DetCard.module.css';
import WeatherContext from '../../../context/Context';

function DetCard() {
  const { weatherInfo, forecastInfo } = useContext(WeatherContext);

  const formatTime = (unix, timezone) => {
    if (!Number.isFinite(unix) || !Number.isFinite(timezone)) {
      return '00:00';
    }

    const date = new Date((unix + timezone) * 1000);

    return `${String(date.getUTCHours()).padStart(2, '0')}:${String(
      date.getUTCMinutes()
    ).padStart(2, '0')}`;
  };

  const sunrise = formatTime(weatherInfo?.sys?.sunrise, weatherInfo?.timezone);

  const sunset = formatTime(weatherInfo?.sys?.sunset, weatherInfo?.timezone);

  const avgPop = forecastInfo?.slice(0, 5)
    ? forecastInfo
        ?.slice(0, 5)
        .reduce((sum, item) => sum + (item.pop ?? 0), 0) / 5
    : 0;

  const rain = Math.round((avgPop ?? 0) * 100);

  return (
    <div className={`${Styles.detCard}`}>
      <div className={`${Styles.sunrise}`}>
        <h4>Sunrise</h4>
        <h4>{sunrise}</h4>
      </div>
      <div className={`${Styles.sunset}`}>
        <h4>Sunset</h4>
        <h4>{sunset}</h4>
      </div>
      <div className={`${Styles.minMax}`}>
        <div>
          <h4>High</h4>
          <h4>
            {weatherInfo?.main?.temp_max
              ? Math.round(weatherInfo.main.temp_max)
              : '0'}
            °
          </h4>
        </div>
        <div>
          <h4>Low</h4>
          <h4>
            {weatherInfo?.main?.temp_min != null
              ? Math.round(weatherInfo.main.temp_min)
              : '0'}
            °
          </h4>
        </div>
      </div>
      <div className={`${Styles.rain}`}>
        <h4>Rain</h4>
        <h4>{rain}%</h4>
      </div>
    </div>
  );
}

export default DetCard;
