import React, { useContext, useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meal from "./components/Meal/Meal";
import BasketContext from "./Store/cart-context";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

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
    <CartProvider>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <MainHeader amount={basketAmount} showCarts={showCartHandler} />
      <Meal onBasketChange={BasketChangeHandler} />
    </CartProvider>
  );
}

export default App;
