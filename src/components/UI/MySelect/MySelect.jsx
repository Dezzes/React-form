import React from 'react'
import classes from "./mySelect.module.css"

export default function MySelect({options, ...props}) {
    return (
        <div className={classes.mySelect}>
            <label htmlFor={props.id}>{props.label}</label>
            <select {...props}>
                {options.map((option) => (
                  <option key={option.city} value={option.value}>{option.city} </option>  
                ))}
            </select>
        </div>

    )
}
