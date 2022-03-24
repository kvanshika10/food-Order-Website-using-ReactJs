import React from "react";
import classes from './button.module.css'

function Button(props){
return(
       <button value={props.value} type="submit" className={classes.button} onClick={props.onClick}>{props.children}</button>
)

}


export default Button