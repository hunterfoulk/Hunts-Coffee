const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_bEwTSq1IZspBAyrKsBajD3NU00leQkCLh2");
const uuid = require("uuid/v4");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("home route");
});

app.post("/checkout", async (req, res) => {
  res.send("Request:", req.body);
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { cart, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: cart.total * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${cart.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(8080);
