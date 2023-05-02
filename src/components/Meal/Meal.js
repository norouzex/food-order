import React from "react";
import MealDescription from "./MealsDescription";
import MealsList from "./MealsList";

const Meal = (props) => {
  return (
    <React.Fragment>
      <MealDescription />
      <MealsList onBasketChange={props.onBasketChange()} />
    </React.Fragment>
  );
};
export default Meal;
