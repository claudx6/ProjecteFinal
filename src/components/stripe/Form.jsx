import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {url} from "../../api/api";
import CheckoutForm from "./Checkout";

// Objeto Stripe para usarlo en todos los renders.
const stripePromise = loadStripe("pk_test_51P8EEsCsMYx0cZJUuHLklzbmOrwtN2WjmhIiOpcfAtx4BYhKwnxrOyKTYYYpf0OEq7zJ6m5czE0SSezD3iGkZU2J00jtIHaymz");

export default function Form() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Crear PaymentIntent tan pronto como se cargue la página
    fetch(`${url}/stripe/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "product",amount : 1200 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}