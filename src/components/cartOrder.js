import React, { useEffect, useState } from "react";
import { useStateValue } from "../state";
import StripeCheckout from "react-stripe-checkout";
import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import _ from "lodash";
import axios from "axios";
import { toast } from "react-toastify";

function CartOrder({ remove }) {
  const [{ cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    if (cart.length === 0) {
      dispatch({ type: "manage", components: { CartOrder: false } });
    }
  }, [cart]);

  async function handleToken(token) {
    const response = await axios.post("http://localhost:8080/checkout", {
      token,
      cart
    });
    const { status } = response.data;

    console.log("Response:", response.data);

    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <>
      <div className="cart-modal">
        <div className="items-container">
          <h1> Your Cart</h1> <FaShoppingCart className="cart-icon" />
          {cart.map(item => (
            <div className="border-container">
              <li className="items-images" key={cart.id}>
                <img className="cart-images" src={item.img} alt=""></img>
                <li>${item.price}</li>
                <li> qty:{item.quantity}</li>
                <li className="items-name">{item.name}</li>
                <MdDeleteForever
                  className="delete-button"
                  onClick={() => remove(item)}
                />
              </li>
            </div>
          ))}
          <div className="cart-total-container">
            <p className="cart-total">
              Total :${Number.parseFloat(total).toFixed(2)}
            </p>
          </div>
        </div>
        <StripeCheckout
          className="checkout-button"
          stripeKey="pk_test_e2BpTrDh3Uz5OkF0wMLCIiMi00CIwVORkJ"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={Number.parseFloat(total).toFixed(2) * 100}
          // panelLabel={Number.parseFloat(total).toFixed(2)}
          name="Hunts Coffee Shop"
        />
      </div>
    </>
  );
}
export default CartOrder;
