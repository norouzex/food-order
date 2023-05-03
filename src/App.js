import React, { useContext, useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meal from "./components/Meal/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <MainHeader showCarts={showCartHandler} />
      <Meal />
    </CartProvider>
  );
}

export default App;
