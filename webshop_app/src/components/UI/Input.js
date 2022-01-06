import classes from './Input.module.css';
const Input =props=>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/> 
    </div>
};
// {...props.input}-> with that spread operator in the input, we can make highly
    //configurable components
export default Input;