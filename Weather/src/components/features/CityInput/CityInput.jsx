import SearchIcon from '../../../assets/icons/SearchIcon.png'
import Styles from './CityInput.module.css'

function CityInput() {
    return (
        <div className={`${Styles.cityInput}`}>
            <form className={`${Styles.inputCityForm}`}>
                <label>
                    <img src={SearchIcon} alt='Ser' />
                    <input type='text' placeholder='Enter City...' />
                </label>

                <button>Search</button>
            </form>
        </div>
    )
}

export default CityInput