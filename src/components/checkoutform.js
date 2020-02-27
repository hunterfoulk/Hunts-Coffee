// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js";

// const [modal, setModal] = useState(false);

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async event => {
//     event.preventDefault();
//     setModal(true);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement)
//     });
//   };

//   return (
//     <>
//       {modal && <div className="modal">hellohellohellohellohellohello</div>}
//       <form className="checkoutform" onSubmit={handleSubmit}>
//         <CardElement />
//       </form>

//       <button
//         onClick={handleSubmit}
//         className="checkout-button"
//         type="submit"
//         disabled={!stripe}
//       >
//         Pay now
//       </button>
//     </>
//   );
// };

// export const stripePromise = loadStripe(
//   "pk_test_e2BpTrDh3Uz5OkF0wMLCIiMi00CIwVORkJ"
// );

// export default CheckoutForm;
