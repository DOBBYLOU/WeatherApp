import Card from '../../shared/Card/Card';
import MiniCard from '../MiniCard/MiniCard';
import Cloud from '../../../assets/weatherInfo/Cloud&Sun.png';
import Rain from '../../../assets/weatherInfo/Rain&Sun.png';
import Styles from './HourlyForecast.module.css';
import { useContext } from 'react';
import WeatherContext from '../../../context/Context';

function HourlyForecast() {
  const { forecastInfo } = useContext(WeatherContext);

  const getNextWeather = (list, hour) => {
    if (!list) return null;

    return list.find((item) => {
      const date = new Date(item.dt * 1000);
      return date.getUTCHours() === hour;
    });
  };

  const weather9 = getNextWeather(forecastInfo, 9);
  const weather12 = getNextWeather(forecastInfo, 12);
  const weather15 = getNextWeather(forecastInfo, 15);
  const weather18 = getNextWeather(forecastInfo, 18);

  return (
    <Card>
      <div className={`${Styles.hourlyForecast}`}>
        <div className={`${Styles.cardCont}`}>
          <MiniCard
            title={'9:00'}
            temp={
              weather9?.main?.temp ? Math.round(weather9?.main?.temp) : '--'
            }
            img={Cloud}
          />
          <MiniCard
            title={'12:00'}
            temp={
              weather12?.main?.temp ? Math.round(weather12?.main?.temp) : '--'
            }
            img={Rain}
          />
          <MiniCard
            title={'15:00'}
            temp={
              weather15?.main?.temp ? Math.round(weather15?.main?.temp) : '--'
            }
            img={Cloud}
          />
          <MiniCard
            title={'18:00'}
            temp={
              weather18?.main?.temp ? Math.round(weather18?.main?.temp) : '--'
            }
            img={Rain}
          />
        </div>
      </div>
    </Card>
  );
}

export default HourlyForecast;
