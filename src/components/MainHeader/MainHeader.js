import React from "react";
import style from "./MainHeader.module.css";
import ShopBasket from "./ShopBasket";
import mealImage from "../../assets/meals.jpg";

const MainHeader = () => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <ShopBasket />
      </header>
      <div className={style["main-image"]}>
        <img src={mealImage} />
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
