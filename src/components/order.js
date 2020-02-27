import React from "react";
import { useStateValue } from "../state.js";
import IceCoffee from "../img/ice-coffeesvg.png";
import HotCoffee from "../img/hot-coffeesvg.png";
import MenuBanner from "../img/banner2.PNG";

export default function Order({ addToCart }) {
  const [{ icedCoffees, hotCoffees }] = useStateValue();

  return (
    <>
      <div className="order-container">
        <div className="menu-banner-container">
          <img className="menubannerimg" src={MenuBanner} alt="" />
        </div>
        <div className="ice-coffee-container">
          <h1>Iced Coffee</h1>
          <img
            // onClick={() => addToCart(item)}
            className="coffee-images"
            src={IceCoffee}
            alt=""
          />
          {icedCoffees.map((item, i) => (
            <div key={i}>
              <p onClick={() => addToCart(item)} className="item-names">
                {item.name}
                <p>${item.price}</p>
              </p>
            </div>
          ))}
        </div>
        <div className="hot-coffee-container">
          <h1>Hot Coffee</h1>
          <img className="coffee-images" src={HotCoffee} alt="" />
          {hotCoffees.map((item, i) => (
            <div key={i}>
              <p onClick={() => addToCart(item)} className="item-names">
                {item.name}
                <p>${item.price}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
