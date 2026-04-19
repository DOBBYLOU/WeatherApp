import CityInput from '../../features/CityInput/CityInput'
import Card from '../../shared/Card/Card'
import WeatherCity from '../../entities/WeaterCity/WeatherCity'
import Styles from './MainInfo.module.css'
import WeatherTemp from '../../entities/WeatherTemp/WeatherTemp'


function MainInfo() {
    return (
        <div className={`${Styles.mainInfo}`}>
            <Card>
                <CityInput />
                <div className={`${Styles.info}`}>
                    <WeatherCity />
                    <WeatherTemp />
                </div>

            </Card>

        </div>
    )
}

export default MainInfo