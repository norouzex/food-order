import React, { useEffect, useState } from "react";
import style from "./MealsList.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     info: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     info: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     info: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     info: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://parseapi.back4app.com/classes/meals",
        {
          method: "GET",
          headers: {
            "X-Parse-Application-Id":
              "honFhwdYWhAtSbsJ4TjNkeu6hs6NUPrHXBb9mXwL",
            "X-Parse-REST-API-Key": "P8RZhjsW4oDzngOE3p7jUl5LRhwqyuV9brFg8euu",
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData["results"]) {
        loadedMeals.push({
          id: responseData["results"][key].objectId,
          name: responseData["results"][key].name,
          info: responseData["results"][key].info,
          price: responseData["results"][key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);
  if (isLoading) {
    return (
      <section className={style.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              info={meal.info}
              price={meal.price}
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
