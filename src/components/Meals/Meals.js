import React from "react"
import MealItemForm from "../OrderDisplay/MealItemForm.js";
import Card from  '../UI/Card.js'
import MealList from './MealList.js';
import classes from './Meals.module.css'





function Meals(props){

  function addAmountHandler(amount){

  }


    let dummyMeals=props.mealItem.map((item)=>(
        <MealList
          id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        amount={item.amount}
        onAddamount={addAmountHandler}
        >
        </MealList>
    ))
    
  
return (
<Card className={classes.meals}>
{/*<MealItemForm mealItem={props.mealItem} ></MealItemForm>*/}
{dummyMeals }

</Card>
)

}

export default Meals;