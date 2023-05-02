import React, { useContext } from "react";
import style from "./MealItem.module.css";
import MealForm from "./MealForm";
import CartContext from "../../../Store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCarHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log("bye");
    console.log(cartCtx);
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.info}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealForm itemId={props.id} onAddToCart={addToCarHandler} />
      </div>
    </li>
  );
};

export default MealItem;
