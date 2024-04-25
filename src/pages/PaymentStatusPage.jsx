import React from "react";
import PaymentStatus from "../components/stripe/PaymentStatus.jsx";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P8EEsCsMYx0cZJUuHLklzbmOrwtN2WjmhIiOpcfAtx4BYhKwnxrOyKTYYYpf0OEq7zJ6m5czE0SSezD3iGkZU2J00jtIHaymz');

function PaymentStatusPage() {
  return  (
    <Elements stripe={stripePromise}>
      <PaymentStatus />
    </Elements>
  );
}

export default PaymentStatusPage;