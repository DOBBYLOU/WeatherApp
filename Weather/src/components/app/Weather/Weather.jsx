import CityInput from '../../features/CityInput/CityInput'
import Card from '../../shared/Card/Card'
import WeatherCity from '../../entities/WeaterCity/WeatherCity'
import Styles from './Weather.module.css'
import MainInfo from '../../features/MainInfo/MainInfo'


function Weather() {
    return (
        <div className={`${Styles.weather}`}>
            <div className="container">
                <MainInfo />
            </div>

        </div>
    )
}

export default Weather