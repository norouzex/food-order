import React from "react";
import style from "./MealItem.module.css";
import MealForm from "./MealForm";
const MealItem = () => {
  return (
    <li className={style.meal}>
      <div>
        <h3>Sushi</h3>
        <div className={style.description}>info</div>
        <div className={style.price}>price</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
};

export default MealItem;
