import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context';
import classes from './MealItemForm.module.css'
import OrderedItem from './OrderedItem';
import Card from '../UI/Card';


function MealItemForm(props){
  const ctx=useContext(AuthContext);
  

    let dummyMeals2=ctx.Items.map((item)=>(
        <OrderedItem
          key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}>
        </OrderedItem>
    ))
    

    return(
    
  <form className={classes.meal}>
 {dummyMeals2}
 
   <div className={classes.bill}>
       <span >
           <h3>Total Amount</h3>
       </span>
       <span>
          <h3>$433</h3>  
       </span>
       
   </div>
   <div className={classes.order}>
   <button className={classes.button2} onClick={props.onClose}>Close</button>
       <button className={classes.button1} >Order</button>
   </div>
  </form>
    );

}


export default MealItemForm
