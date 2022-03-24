import React,{useContext, useState} from "react"
import classes from './MealList.module.css'
import Button from './Button.js'
import AuthContext from "../../store/auth-context"

function MealList(props){
 
  
  let x=0;
  const [amount,setAmount]=useState(x);  
  
 const ctx=useContext(AuthContext);

function buttonClickHandler(event){
  if(amount===0||amount<0){
    return;
  }
 
   ctx.addItem({
    name:props.name,
    id:props.id,
    price:props.price,
    amount:+amount,
  
  });
   
}
   
function inputChangeHandler(event){
  setAmount(event.target.value);
}




const key=props.id;


return(
    

    <div className={classes.meallist}>
    <span className={classes.dish}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.ingredients}>{props.description}</div>
        <div className={classes.price}>$ {props.price}</div>
        </span>
       <span>
        <span className={classes.input} >
       <label htmlFor="Amount">Amount</label>
       <input 
            type="number"
            min="0"
            step="1"
            value={amount}
            onChange={inputChangeHandler}
          >
       </input></span>
        
       <Button value={key} onClick={buttonClickHandler}>+ Add</Button>
       </span>
      
        </div>
       

    
)

}

export default MealList;