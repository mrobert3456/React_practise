import classes from './Input.module.css';
import React from 'react';
const Input = React.forwardRef((props,ref)=>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/> 
    </div>
});
// {...props.input}-> with that spread operator in the input, we can make highly
    //configurable components
export default Input;