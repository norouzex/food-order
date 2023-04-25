import React from "react";
import MealDescription from "./MealsDescription";
import MealsList from "./MealsList";

const Meal = () => {
  return (
    <React.Fragment>
      <MealDescription />
      <MealsList />
    </React.Fragment>
  );
};
export default Meal;
