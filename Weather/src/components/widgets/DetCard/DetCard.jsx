import Styles from './DetCard.module.css'

function DetCard() {
    return (
        <div className={`${Styles.detCard}`}>
            <div className="sunrise">
                <h4>Sunrise</h4>
                <h4>5:45</h4>
            </div>
            <div className="sunset">
                <h4>Sunset</h4>
                <h4>9:45</h4>
            </div>
            <div className={`${Styles.minMax}`}>
                <div><h4>High</h4>
                    <h4>24</h4></div>
                <div><h4>Low</h4>
                    <h4>16</h4></div>
            </div>
            <div className="rain">
                <h4>Rain</h4>
                <h4>40%</h4>
            </div>
        </div>
    )
}

export default DetCard