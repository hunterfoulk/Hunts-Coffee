import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./app";
import "./index.css";
import IceCoffee from "./img/ice-coffeesvg.png";
import HotCoffee from "./img/hot-coffeesvg.png";

export function Index() {
  let initialState = {
    components: {
      CartOrder: false
    },
    cart: [],
    total: 0,

    icedCoffees: [
      {
        id: "1",
        name: "Irish Cream Cold Brew",
        price: 3.99,
        img: IceCoffee
      },
      {
        id: "2",
        name: "Irish Cream Nitro® Cold Brew",
        price: 3.99,
        img: IceCoffee
      },
      {
        id: "3",
        name: "Nitro Cold Brew Salted Cream Foam",
        price: 3.99,
        img: IceCoffee
      },
      {
        id: "4",
        name: "Cold Brew with Cascara Cold Foam",
        price: 3.99,
        img: IceCoffee
      },
      {
        id: "5",
        name: "Reserve Cold Brew",
        price: 3.99,
        img: IceCoffee
      },
      {
        id: "6",
        name: "Nitro Cold Brew  Cascara Cold Foam",
        price: 3.99,
        img: IceCoffee
      }
    ],
    hotCoffees: [
      {
        id: "7",
        name: "Salted Caramel® Hot Chocolate",
        price: 3.99,
        img: HotCoffee
      },
      {
        id: "8",
        name: "White Hot Chocolate",
        price: 3.99,
        img: HotCoffee
      },
      {
        id: "9",
        name: "Almondmilk Honey Flat White",
        price: 3.99,
        img: HotCoffee
      },
      {
        id: "10",
        name: "Blonde Smoked Butterscotch Latte",
        price: 3.99,
        img: HotCoffee
      },
      {
        id: "11",
        name: "Decaf Pike Place® Roast",
        price: 3.99,
        img: HotCoffee
      },
      {
        id: "12",
        name: "Soft Pike Place® Roast",
        price: 3.99,
        img: HotCoffee
      }
    ]
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "manage":
        return {
          ...state,
          components: action.components
        };
      case "addCoffee":
        return {
          ...state,
          cart: action.cart,
          total: action.total
        };
      case "updateCart":
        return {
          ...state,
          cart: action.cart,
          total: action.total
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
