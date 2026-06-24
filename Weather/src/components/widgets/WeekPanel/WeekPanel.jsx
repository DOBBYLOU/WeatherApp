import Card from '../../shared/Card/Card';
import MiniCard from '../MiniCard/MiniCard';
import Cloud from '../../../assets/weatherInfo/Cloud&Sun.png';
import Rain from '../../../assets/weatherInfo/Rain&Sun.png';
import Styles from './WeekPanel.module.css';
import { useEffect, useState } from 'react';

function WeekPanel() {
  const [weekArray, setWeekArray] = useState([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ]);

  const getWeeklyArray = () => {
    const today = new Date();
    let dayNumber = today.getDay();

    setWeekArray((prev) => {
      const newArr = [...prev];
      const index = dayNumber === 0 ? 6 : dayNumber - 1;
      newArr[index] = 'Today';
      return newArr;
    });
  };

  useEffect(() => {
    getWeeklyArray();
  }, []);

  return (
    <Card>
      <div className={`${Styles.weekPanel}`}>
        <div className={`${Styles.cardCont}`}>
          <MiniCard title={'Mon'} index={weekArray[0]} img={Rain} />
          <MiniCard title={'Tue'} index={weekArray[1]} img={Cloud} />
          <MiniCard title={'Wed'} index={weekArray[2]} img={Rain} />
          <MiniCard title={'Thu'} index={weekArray[3]} img={Cloud} />
          <MiniCard title={'Fri'} index={weekArray[4]} img={Rain} />
          <MiniCard title={'Sat'} index={weekArray[5]} img={Cloud} />
          <MiniCard title={'Sun'} index={weekArray[6]} img={Rain} />
        </div>
      </div>
    </Card>
  );
}

export default WeekPanel;
