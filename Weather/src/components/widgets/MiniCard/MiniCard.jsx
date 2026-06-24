import { useContext, useEffect, useState } from 'react';
import Styles from './MiniCard.module.css';
import WeatherContext from '../../../context/Context';

function MiniCard({ title, index, temp, img }) {
  const { loading, getWeatherByDate } = useContext(WeatherContext);

  const [dayDate, setDayDate] = useState(null);

  const normalizeDay = (day) => (day === 0 ? 6 : day - 1);

  const getDateByDay = (dayName) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const today = new Date();

    const todayIndex = normalizeDay(today.getDay());
    const targetIndex = days.indexOf(dayName);

    const diff = targetIndex - todayIndex;

    const targetDate = new Date();
    targetDate.setDate(today.getDate() + diff);

    return targetDate;
  };

  useEffect(() => {
    if (title.length === 3) {
      const date = getDateByDay(title);

      const formatted = date.toISOString().split('T')[0];

      setDayDate(formatted);
    }
  }, [title]);

  return (
    <div className={`${Styles.miniCard} ${loading ? Styles.loading : ''}`}>
      <div className={`${Styles.textSec}`}>
        <h2>{index ? (title === index ? title : index) : title}</h2>
        <h4>
          {temp
            ? temp
            : getWeatherByDate(dayDate)
              ? Math.round(getWeatherByDate(dayDate))
              : '--'}
          °
        </h4>
      </div>
      <div className={`${Styles.imgCont}`}>
        <img src={img} alt="weath" />
      </div>
    </div>
  );
}

export default MiniCard;
