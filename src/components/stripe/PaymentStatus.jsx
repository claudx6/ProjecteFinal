import React, {useState, useEffect} from 'react';
import {useStripe} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
    },
    successContainer: {
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
      width: '150px',
      height: '150px',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    successMessage: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
    },
    successText: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '20px',
    },
    link: {
      fontSize: '16px',
      color: '#007bff',
      textDecoration: 'none',
    },
  };

const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState('pending');
  const [text, setText] = useState('Payment Processing...');
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );
    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            localStorage.removeItem("cartItems");
            setMessage('success');
            setText('Payment Successful!')
            break;

          case 'processing':
            setText('Payment Processing...')
            setMessage("pending");
            break;

          case 'requires_payment_method':
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setText('Payment failed. Please try another payment method.')
            setMessage('Payment failed. Please try another payment method.');
            break;

          default:
            setText('Something went wrong.')
            setMessage('Something went wrong.');
            break;
        }
      });
  }, [stripe]);


  return <div style={styles.container}>
  <div style={styles.successContainer}>
    <img src={
        message === 'success' ? 
        'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-green-check-mark-icon-flat-style-png-image_1986021.jpg'
        : message === "pending" ?
        'https://cdn-icons-png.flaticon.com/512/4909/4909989.png' : 'https://toppng.com/uploads/preview/check-mark-png-11553192946zsmjn0upiz.png'} alt="Product" style={styles.productImage} />
    <h2 style={styles.successMessage}>{text}</h2>
    <p style={styles.successText}>Thank you for your purchase.</p>
    <Link to="/tienda" style={styles.link}>Continue Shopping</Link>
  </div>
</div>;
};

export default PaymentStatus;