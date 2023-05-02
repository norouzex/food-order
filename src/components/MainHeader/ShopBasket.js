import React from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./ShopBasket.module.css";

const ShopBasket = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{props.amount}</span>
    </button>
  );
};

export default ShopBasket;
