import CloudAndSun from '../../../assets/weatherInfo/Cloud&Sun.png'
import Styles from './WeatherCity.module.css'

function WeatherCity() {
    return (
        <div className={`${Styles.cityInfo}`}>
            <div className={`${Styles.textInfo}`}>
                <h2>Kyiv, Ukraine</h2>
                <h4>Mostly Cloudy</h4>
            </div>
            <div className={`${Styles.infoImg}`}>
                <img src={CloudAndSun} alt='Cloud&Sun' />
            </div>

        </div>
    )
}

export default WeatherCity