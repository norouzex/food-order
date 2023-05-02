import React from "react";
import style from "./MainHeader.module.css";
import ShopBasket from "./ShopBasket";
import mealImage from "../../assets/meals.jpg";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <ShopBasket amount={props.amount} onClick={props.showCarts} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealImage} />
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
