import Card from '../../shared/Card/Card'
import MiniCard from '../MiniCard/MiniCard'
import Styles from './HourlyForecast.module.css'

function HourlyForecast() {
    return (
        <Card>
            <div className={`${Styles.hourlyForecast}`}>
                <MiniCard title={'Now'} temp={12} />
            </div>
        </Card>
    )
}

export default HourlyForecast