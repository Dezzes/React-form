import React from 'react';
import classes from "./myInput.module.css"

const MyInput = ({children, afterText, warning, ...props}) => {
    return (
        <div className={classes.myInput}>
            <label >
            {props.label}
            </label>
            <input {...props}></input>
            <span>{afterText}</span>
            {warning}
        </div>

    );
}

export default MyInput;
