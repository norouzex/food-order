import React, { useContext, useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meal from "./components/Meal/Meal";
import BasketContext from "./Store/cart-context";
import Cart from "./components/Cart/Cart";

function App() {
  const [basketAmount, setBasketAmount] = useState(0);
  const basketCtx = useContext(BasketContext);

  const BasketChangeHandler = () => {
    setBasketAmount(basketCtx.totalAmount);
  };

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <MainHeader amount={basketAmount} showCarts={showCartHandler} />
      <Meal onBasketChange={BasketChangeHandler} />
    </React.Fragment>
  );
}

export default App;
