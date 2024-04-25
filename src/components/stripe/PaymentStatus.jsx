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
  const [text, setText] = useState('Pago procesando...');
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Recuperar el parámetro "paid_intent_client_secret" agregado en return_url por Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );
    // Recuperar PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        // Inspeccione el "estado" de PaymentIntent para indicar el estado del pago al cliente
        //
        // Algunos métodos de pago [tendrán éxito o fallarán inmediatamente] [0] tras la confirmación, mientras que otros primero entrarán en un estado de "procesamiento"
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent.status) {
          case 'succeeded':
            localStorage.removeItem("cartItems");
            setMessage('success');
            setText('Pago exitoso!')
            break;

          case 'processing':
            setText('Payment Processing...')
            setMessage("pendiente");
            break;

          case 'requires_payment_method':
            // Redirige al cliente a la página de pago para intentar cobrar el pago nuevamente
            setText('Pago fallido. Por favor prueba con otro método de pago.')
            setMessage('Pago fallido. Por favor prueba con otro método de pago.');
            break;

          default:
            setText('Algo salió mal.')
            setMessage('Algo salió mala.');
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
    <p style={styles.successText}>Gracias por su compra.</p>
    <Link to="/tienda" style={styles.link}>Continuar comprando</Link>
  </div>
</div>;
};

export default PaymentStatus;