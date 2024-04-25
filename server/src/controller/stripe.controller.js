// This is your test secret API key.
const stripe = require("stripe")('sk_test_51P8EEsCsMYx0cZJUCLRCVaeTwtJym6Gw1ir4rqIajrfimMlumuP36ThBQwqANRFAbCQ3e4HLknnNarcuzjnJy2N600VmsJs6iC');

const createPaymentIntend = async (req,res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "eur",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
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