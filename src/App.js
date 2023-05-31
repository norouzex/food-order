import React, { useContext, useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Meal from "./components/Meal/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  // async function addMelasHandler(meal) {
  //   const response = await fetch(
  //     "https://parseapi.back4app.com/classes/meals",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(meal),
  //       headers: {
  //         "X-Parse-Application-Id": "honFhwdYWhAtSbsJ4TjNkeu6hs6NUPrHXBb9mXwL",
  //         "X-Parse-REST-API-Key": "P8RZhjsW4oDzngOE3p7jUl5LRhwqyuV9brFg8euu",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  // const test = () => {
  //   const DUMMY_MEALS = [
  //     {
  //       // id: "m1",
  //       name: "Sushi",
  //       info: "Finest fish and veggies",
  //       price: 22.99,
  //     },
  //     {
  //       // id: "m2",
  //       name: "Schnitzel",
  //       info: "A german specialty!",
  //       price: 16.5,
  //     },
  //     {
  //       // id: "m3",
  //       name: "Barbecue Burger",
  //       info: "American, raw, meaty",
  //       price: 12.99,
  //     },
  //     {
  //       // id: "m4",
  //       name: "Green Bowl",
  //       info: "Healthy...and green...",
  //       price: 18.99,
  //     },
  //   ];

  //   for (const i in DUMMY_MEALS) addMelasHandler(DUMMY_MEALS[i]);
  // };

  return (
    <CartProvider>
      {/* <button
        style={{ zIndex: "999", backgroundColor: "blue", position: "absolute" }}
        onClick={test}
      >
        submitted
      </button> */}
      {cartIsShown && <Cart onClose={showCartHandler} />}
      <MainHeader showCarts={showCartHandler} />
      <Meal />
    </CartProvider>
  );
}

export default App;
