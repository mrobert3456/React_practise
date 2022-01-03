import React from "react";
import AddUser from "../Users/AddUser";
import classes from "./Card.module.css";
const Card =props=>{

    return(
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card