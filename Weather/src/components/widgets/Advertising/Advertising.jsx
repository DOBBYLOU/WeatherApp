import Card from "../../shared/Card/Card"
import Styles from './Advertising.module.css'

function Advertising() {
    return (
        <Card>
            <div className={`${Styles.advertising}`}>
                Your ad could be here.
            </div>
        </Card>

    )
}

export default Advertising