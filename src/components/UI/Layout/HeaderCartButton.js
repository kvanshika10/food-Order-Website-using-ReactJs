import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon.js';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';



function HeaderCartButton(props){



const ctx=useContext(AuthContext);
const numofItems=ctx.Items.reduce((result,Item)=>{return +(result+Item.amount)},0);


    
  return(
      <button  className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
       <CartIcon />
       </span>
       <span>Your Cart</span>
        <span className= {classes.badge}>
          {numofItems}
          </span>

      </button>
  )


}

export default HeaderCartButton
