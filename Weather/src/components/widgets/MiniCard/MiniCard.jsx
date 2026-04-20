import Styles from './MiniCard.module.css'


function MiniCard({ title, temp, imgURL }) {
    return (
        <div className={`${Styles.miniCard}`}>
            <h2>{title}</h2>
            <h4>{temp}</h4>

        </div>
    )
}

export default MiniCard