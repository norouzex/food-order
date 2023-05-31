import style from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={style.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={style.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={style.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={style.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={style.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={style.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
