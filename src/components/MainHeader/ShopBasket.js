import { React, useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./ShopBasket.module.css";
import CartContext from "../../Store/cart-context";

const ShopBasket = (props) => {
  const [btnIsHighlighted, setBtnIHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnStyle = `${style.button} ${btnIsHighlighted ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyle} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default ShopBasket;
