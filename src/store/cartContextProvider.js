import React, { useReducer } from "react"

import AuthContext from "./auth-context"


const defaultState={
    Items:[],
    totalAmount:0,
}

function cartReducer(state,action){
    if(action.type==='ADD'){
        const updatedItems=state.Items.concat(action.item);
        const updatedtotalAmount=state.totalAmount +action.item.price*action.item.amount;
        return {Items:updatedItems,totalAmount:updatedtotalAmount}
    }else if(action.type==='REMOVE'){
        const updatedItems=state.Items.filter((item)=>{
           return  item.id!==action.id
        })
   

        return {Items:updatedItems,totalAmount:state.totalAmount};
    }
}


function CartContextProvider(props){
  
   
 const[cartState,dispatchcartAction]=useReducer(cartReducer,defaultState);
console.log(cartState);
 function addItemHandler(item){
     
    dispatchcartAction({type:'ADD',item:item})
}
function deleteItemHandler(id){
    dispatchcartAction({type:'ADD',item:id})
}

   const Cartcontext={
       Items:cartState.Items,
       TotalAmount:cartState.totalAmount,
       addItem:addItemHandler,
       deleteItem:deleteItemHandler,
   }
   console.log("pp");
   return(

    <AuthContext.Provider value={Cartcontext}>
       {props.children}
    </AuthContext.Provider>
   )
}


export default CartContextProvider
