import DetCard from '../../widgets/DetCard/DetCard'
import Styles from './WeatherTemp.module.css'

function WeatherTemp() {
    return (
        <div className={`${Styles.tempInfo}`}>
            <div className={`${Styles.temp}`}>
                <h1>12</h1>
                <h4>Feels like 10</h4>
            </div>
            <div className={`${Styles.detailsUp}`}>
                <div className="wind">
                    <span>Wind:</span> 12 km/h
                </div>
                <div className={`${Styles.line}`}></div>
                <div className={`${Styles.humidity}`}>
                    <span>Humidity:</span> 70%
                </div>
            </div>
            <DetCard />
        </div>
    )
}

export default WeatherTemp