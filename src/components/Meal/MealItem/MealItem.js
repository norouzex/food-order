import React from "react";
import style from "./MealItem.module.css";
import MealForm from "./MealForm";
const MealItem = (probs) => {
  return (
    <li className={style.meal}>
      <div>
        <h3>{probs.name}</h3>
        <div className={style.description}>{probs.info}</div>
        <div className={style.price}>{probs.price}</div>
      </div>
      <div>
        <MealForm itemId={probs.id} />
      </div>
    </li>
  );
};

export default MealItem;
