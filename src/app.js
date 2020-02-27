import React, { useState, useEffect } from "react";
import { useStateValue } from "./state.js";
import "./index.css";
import "../src/components/components.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Order from "./components/order";
import CartOrder from "./components/cartOrder";
import { BrowserRouter as Router, Route } from "react-router-dom";
import _ from "lodash";

export default function App() {
  const [{ cart, total, components }, dispatch] = useStateValue();

  const handleCartOpen = () => {
    if (cart.length !== 0)
      dispatch({
        type: "manage",
        components: {
          CartOrder: !components.CartOrder
        }
      });
  };

  //Add coffee to cart
  const addToCart = async item => {
    let coffeeCopy = { ...item, quantity: 1 };

    let price = item.price;
    let newTotal = total + price;

    if (cart.some(c => c.id === item.id)) {
      let cartCopy = [...cart];

      let indexOfCart = cartCopy.findIndex(c => c.id === item.id);

      cartCopy[indexOfCart].quantity++;

      await dispatch({
        type: "addCoffee",
        cart: cartCopy,
        total: newTotal
      });
    } else {
      await dispatch({
        type: "addCoffee",
        cart: [...cart, coffeeCopy],
        total: newTotal
      });
    }
  };
  const handleRemove = async item => {
    const cartItems = _.filter(cart, o => o.id !== item.id);
    let price = item.price;
    let newTotal = total - price * item.quantity;
    await dispatch({
      type: "updateCart",
      cart: cartItems,
      total: newTotal
    });
  };

  useEffect(() => {
    console.log(cart, "cart");
  }, [cart]);

  return (
    <>
      <div className="App">
        <div className="Main">
          <Router>
            <Banner open={handleCartOpen} />

            <Navbar />
            {components.CartOrder && <CartOrder remove={handleRemove} />}
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Intro />
                </>
              )}
            />
            <Route
              exact
              path="/order"
              render={() => (
                <>
                  <Order addToCart={addToCart} />
                </>
              )}
            />
            {/* <Route exact path="/cart" component={Cart} /> */}
            <Footer />
          </Router>
        </div>
      </div>
    </>
  );
}
