import React, { useState } from 'react'
import classes from './OrderedItem.module.css'


function OrderedItem(props){
    const [amount,setAmount]=useState(props.amount);

    function addClickHandler(){
        let y=amount;
        y++;
        setAmount(y);

    }

    function subtractClickHandler(){
        let z=amount;
        z--;
        setAmount(z);

    }
    return(
 <div className={classes.meallist}>
    <span className={classes.dish}>
        <div className={classes.name}>{props.name}</div>

        <div>
          <span className={classes.price}>$ {props.price}</span>
          <span className={classes.no}>×{amount}</span>
          </div>

       </span>
        <span >
        <div className={classes.amount}>
        <button type='button' className={classes.button} onClick={subtractClickHandler}>–</button>
        <button type ='button' className={classes.button} onClick={addClickHandler}>+</button>

         </div>
      
       </span>
      
        </div>
    
    );

}


export default OrderedItem