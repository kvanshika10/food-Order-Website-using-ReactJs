
import Card from './components/UI/Card';
import Header from './components/UI/Layout/Header';
import  Meals  from './components/Meals/Meals.js'
import { DUMMY_MEALS } from './components/Meals/MealItem';
import { Fragment, useState } from 'react';
import Cart from './components/OrderDisplay/Cart';
import CartContextProvider from './store/cartContextProvider';
import MealsSummary from './components/Meals/MealSummary';



function App() {

  const[showCart,setShowCart]=useState(false);

function showCartHandler(){
  setShowCart(true);
}
function hideCartHandler(){
  setShowCart(false);
}

  return (
    
    <CartContextProvider>
    {showCart&&<Cart onClose={hideCartHandler}></Cart>}
    <Header onClick={showCartHandler}>
     </Header>
     <MealsSummary></MealsSummary>
    {!showCart&&<Meals mealItem={DUMMY_MEALS}></Meals>}
     

    </CartContextProvider>
  
  );
}

export default App;
