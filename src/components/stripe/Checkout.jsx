import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  AddressElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("El pago se realizó correctamente!");
          break;
        case "processing":
          setMessage("Su pago se está procesando.");
          break;
        case "requires_payment_method":
          setMessage("No se ha realizado el pago, por favor intente nuevamente.");
          break;
        default:
          setMessage("Error, algo salió mal.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js aún no se ha cargado.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // return_url: "http://localhost:5173/tienda/order",
        return_url: "https://petitamazones.vercel.app/tienda/order",
      },
    });

    // Este punto  se llevará a cabo si hay un error inmediato al confirmar el pago
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <AddressElement id="address-element" options={{mode : 'shipping'}} />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="button-stripe">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Muestra cualquier mensaje de error o éxito */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
