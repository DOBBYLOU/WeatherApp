import CityInput from '../../features/CityInput/CityInput';
import Card from '../../shared/Card/Card';
import WeatherCity from '../../entities/WeaterCity/WeatherCity';
import WeatherTemp from '../../entities/WeatherTemp/WeatherTemp';
import { useContext } from 'react';
import WeatherContext from '../../../context/Context';

import Styles from './MainInfo.module.css';

function MainInfo() {
  const { loading } = useContext(WeatherContext);
  return (
    <div className={`${Styles.mainInfo}`}>
      <Card>
        <CityInput />
        <div className={`${Styles.info} ${loading ? Styles.loading : ''}`}>
          <WeatherCity />
          <WeatherTemp />
        </div>
      </Card>
    </div>
  );
}

export default MainInfo;
