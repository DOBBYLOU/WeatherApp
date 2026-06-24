import CloudAndSun from '../../../assets/weatherInfo/Cloud&Sun.png';
import { useContext } from 'react';
import WeatherContext from '../../../context/Context';

import Styles from './WeatherCity.module.css';

function WeatherCity() {
  const { weatherInfo } = useContext(WeatherContext);

  return (
    <div className={`${Styles.cityInfo}`}>
      <div className={`${Styles.textInfo}`}>
        <h2>
          {weatherInfo?.name
            ? `${weatherInfo.name}, ${weatherInfo?.sys?.country ?? ''}`
            : 'City, Country'}
        </h2>
        <h4>{weatherInfo?.weather?.[0]?.main ?? '----'}</h4>
      </div>
      <div className={`${Styles.infoImg}`}>
        <img src={CloudAndSun} alt="Cloud&Sun" />
      </div>
    </div>
  );
}

export default WeatherCity;
