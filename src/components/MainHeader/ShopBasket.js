import React from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./ShopBasket.module.css";
const ShopBasket = () => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>0</span>
    </button>
  );
};

export default ShopBasket;
