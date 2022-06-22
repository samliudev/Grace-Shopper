import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { setCart } from "./store/cart";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const oldCart = localStorage.getItem("cart");
    const oldCartJSON = JSON.parse(oldCart);
    dispatch(setCart(oldCartJSON));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
