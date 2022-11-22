import css from './Card.module.css'

const Card = (props) => {
    // console.log(props.children);
    return(
        <div className={`${css.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;