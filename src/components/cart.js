// import React, { useState } from "react";
// import { useStateValue } from "../state";

// import StripeCheckout from "react-stripe-checkout";

// export default function Cart() {
//   const [{ cart, total }, dispatch] = useStateValue();

//   function handleToken(token, addresses) {
//     console.log({ token, addresses });
//   }

//   return (
//     <>
//       <div className="cart-container">
//         <div className="form-container">
//           <div className="firstname-input">
//             <p>First name</p>
//             <input type="text" />
//           </div>
//           <div className="lastname-input">
//             <p>Last name</p>
//             <input type="text" />
//           </div>
//           <div className="address-input">
//             <p>Address</p>
//             <input type="text" />
//           </div>
//           <div className="city-input">
//             <p>City</p>
//             <input type="text" />
//           </div>
//           <div className="state-input">
//             <p>State</p>
//             <input type="text" />
//           </div>

//           <div className="email-input">
//             <p>Email</p>
//             <input type="text" />
//           </div>
//           <div className="phone-input">
//             <p>Phone Number</p>
//             <input type="text" />
//           </div>

//           <StripeCheckout
//             stripeKey="pk_test_e2BpTrDh3Uz5OkF0wMLCIiMi00CIwVORkJ"
//             token={handleToken}
//             amount={total}
//             panelLabel={total}
//             name="Hunts Coffee Shop"
//           />
//         </div>

//         <div className="items-container">
//           <h1>Cart :</h1>
//           {cart.map(item => (
//             <div className="border-container">
//               <li className="items-images" key={cart.id}>
//                 <img className="cart-images" src={item.img} alt=""></img>
//                 <li>{item.price}</li>
//                 <li> qty:{item.quantity}</li>
//                 <li className="items-name">{item.name}</li>
//                 <div className="items-line-container">
//                   <span className="items-line"></span>
//                 </div>
//               </li>
//             </div>
//           ))}

//           <div className="cart-total-container">
//             <p className="cart-total">Total :${total}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
