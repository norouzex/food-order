import React from "react";
import style from "./MealsList.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const MealsList = () => {
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          <MealItem />
        </ul>
      </Card>
    </section>
  );
};
export default MealsList;
