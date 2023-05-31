import { useContext, useState } from "react";

import CartItem from "./CartItem";
import style from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    fetch("https://parseapi.back4app.com/classes/order", {
      method: "POST",
      body: JSON.stringify({ user: userData, orderItems: cartCtx.items }),
      headers: {
        "X-Parse-Application-Id": "honFhwdYWhAtSbsJ4TjNkeu6hs6NUPrHXBb9mXwL",
        "X-Parse-REST-API-Key": "P8RZhjsW4oDzngOE3p7jUl5LRhwqyuV9brFg8euu",
        "Content-Type": "application/json",
      },
    });
  };

  const CartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={style.actions}>
      <button className={style["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={style.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal>
      {CartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};
export default Cart;
