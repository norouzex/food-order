import React from "react";
import style from "./MealsList.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    info: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    info: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    info: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    info: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = (props) => {
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              info={meal.info}
              price={meal.price}
              onBasketChange={props.onBasketChange}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
export default MealsList;

// const items = DUMMY_MEALS.map((meal) => (
//   <MealItem
//     key={meal.id}
//     id={meal.id}
//     name={meal.name}
//     info={meal.info}
//     price={meal.price}
//     onBasketChange={props.onBasketChange}
//   />
// ));
