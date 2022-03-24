import React from "react";
import MealItemForm from "./MealItemForm";
import classes from './Cart.module.css';
import ReactDOM  from 'react-dom'
import Card from "../UI/Card";

function Cart(props){
function Backdrop(props){
    return(<div className={classes.backdrop} onClick={props.onClick}></div>)
   }

   function Modal(props){
       return <Card className={classes.modal}>
           <MealItemForm onClose={props.onClose}></MealItemForm>
       </Card>
   }
   

return(
<React.Fragment>
  {ReactDOM.createPortal(<Backdrop onClick={props.onClose}></Backdrop>,document.getElementById("backdrop-root"))}
  {ReactDOM.createPortal(<Modal onClose={props.onClose}></Modal>,document.getElementById("overlay-root"))}

</React.Fragment>
)

}

export default Cart;