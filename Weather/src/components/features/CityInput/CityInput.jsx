import SearchIcon from '../../../assets/icons/SearchIcon.png';
import { useContext, useState } from 'react';
import WeatherContext from '../../../context/Context';
import Styles from './CityInput.module.css';

function CityInput() {
  const { APIFunc } = useContext(WeatherContext);
  const [city, setCity] = useState('Kyiv');

  return (
    <div className={`${Styles.cityInput}`}>
      <form
        className={`${Styles.inputCityForm}`}
        onSubmit={(e) => {
          e.preventDefault();
          APIFunc(city);
        }}
      >
        <label htmlFor="Search_input">
          <img src={SearchIcon} alt="Ser" />
          <input
            type="text"
            id="Search_input"
            placeholder="Enter City..."
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <button>Search</button>
      </form>
    </div>
  );
}

export default CityInput;
