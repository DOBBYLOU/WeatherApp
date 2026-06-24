import Styles from './Card.module.css';

function Card({ children }) {
  return <div className={`${Styles.card}`}>{children}</div>;
}

export default Card;
