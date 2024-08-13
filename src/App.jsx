import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  };
  const hideCardHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
