import MainInfo from '../../widgets/MainInfo/MainInfo';
import Advertising from '../../widgets/Advertising/Advertising';
import Styles from './Weather.module.css';
import HourlyForecast from '../../widgets/Hourly forecast/HourlyForecast';
import WeekPanel from '../../widgets/WeekPanel/WeekPanel';

function Weather() {
  return (
    <div className={`${Styles.weather}`}>
      <div className={`container ${Styles.flex}`}>
        <div className={`${Styles.leftPanel}`}>
          <HourlyForecast />
        </div>
        <div className={`${Styles.main}`}>
          <MainInfo />
          <Advertising />
        </div>
        <div className={`${Styles.rightPanel}`}>
          <WeekPanel />
        </div>
      </div>
    </div>
  );
}

export default Weather;
