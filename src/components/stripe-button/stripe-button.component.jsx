import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51KVHUXCFr4LY0TIBqbNmBoWjq7vPmc9JU9ZEFNZKoZYVgWvLCjAg3CWv7Umh4ueXWikKwRknpXuwTpYmJbOibGg5006GCHle1o";
  
  const onToken = token =>{
    console.log(token)  
    alert('Payment Succesfull');
  }
  
  return (
      <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount ={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey ={publishableKey}
      />
  );
};

export default StripeCheckoutButton;
