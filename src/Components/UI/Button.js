import css from "./Button.module.css";

const Button = (props) => {
    const sub = () => {
        console.log(props.name, props.age);
    }
    
    return(
        <button className={css.button} type={props.type || 'button'} >ADD</button>
    );
};

export default Button;