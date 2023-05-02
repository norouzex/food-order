import CartItem from "./CartItem";
import style from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const hasItems = true;
  const totalAmount = 0;

  const CartItems = <ul>{}</ul>;

  return (
    <Modal>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
