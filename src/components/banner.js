import React, { useState } from "react";
import banner from "../img/coffeeBanner.jpg";
import Cartimgtwo from "../img/cartimg2.png";
import { useStateValue } from "../state.js";
import CartBadge from "../img/indicator.png";

export default function Banner({ open }) {
  const [{ cart, total, components }, dispatch] = useStateValue();

  if (cart.length !== 0)
    return (
      <div className="banner-main">
        <img className="banner-img" src={banner} alt="" />
        <div className="cart-image-container">
          {/* <div className="cart-badge"></div> */}
          <img className="cart-badge" src={CartBadge} alt="" />
          <img className="cart-img" src={Cartimgtwo} alt="" onClick={open} />
        </div>
      </div>
    );

  return (
    <>
      <div className="banner-main">
        <img className="banner-img" src={banner} alt="" />
        <div className="cart-image-container">
          <img className="cart-img" src={Cartimgtwo} alt="" onClick={open} />
        </div>
      </div>
    </>
  );
}
