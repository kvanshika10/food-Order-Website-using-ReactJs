import React from "react"

import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"
import meals2Img from './meals2.jpg'

function Header(props){
    return(
        <React.Fragment>
    <header className={classes.header}>
    <h1>  React Meals</h1>
    <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
    </header>
    
    <div className={classes['main-image']}>
    <img src={meals2Img} alt="AF">

    </img>
    
    </div>
    </React.Fragment>
    
    )
}





export default Header