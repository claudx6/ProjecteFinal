// API key
const stripe = require("stripe")('sk_test_51P8EEsCsMYx0cZJUCLRCVaeTwtJym6Gw1ir4rqIajrfimMlumuP36ThBQwqANRFAbCQ3e4HLknnNarcuzjnJy2N600VmsJs6iC');

const createPaymentIntend = async (req,res) => {
    const { items } = req.body;

    // Crear un PaymentIntent con el total del pedido y la moneda
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
}

module.exports = {
    createPaymentIntend
}