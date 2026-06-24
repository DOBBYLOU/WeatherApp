import DetCard from '../../widgets/DetCard/DetCard';
import { useContext } from 'react';
import WeatherContext from '../../../context/Context';

import Styles from './WeatherTemp.module.css';

function WeatherTemp() {
  const { weatherInfo } = useContext(WeatherContext);

  return (
    <div className={`${Styles.tempInfo}`}>
      <div className={`${Styles.temp}`}>
        <h1>
          {weatherInfo?.main?.temp ? Math.round(weatherInfo.main.temp) : '0'}°
        </h1>
        <h4>
          Feels like{' '}
          {weatherInfo?.main?.feels_like
            ? Math.round(weatherInfo.main.feels_like)
            : '0'}
          °
        </h4>
      </div>
      <div className={`${Styles.detailsUp}`}>
        <div className={`${Styles.wind}`}>
          Wind: {weatherInfo?.wind?.speed ?? '0'} km/h
        </div>
        <div className={`${Styles.line}`}></div>
        <div className={`${Styles.humidity}`}>
          Humidity: {weatherInfo?.main?.humidity ?? '0'}%
        </div>
      </div>
      <DetCard />
    </div>
  );
}

export default WeatherTemp;
