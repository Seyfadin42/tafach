import React from 'react';
import { useLocation } from 'react-router-dom';
import './placeOrder.css';

function PlaceOrder() {
  const location = useLocation();
  const { subtotal } = location.state || {};

  // Set delivery fee
  const deliveryFee = subtotal > 0 ? 10 : 0; // Set delivery fee to 10 if there are items
  const total = subtotal + deliveryFee; // Calculate total

  // Check if there are items in the cart
  const hasItems = subtotal > 0;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Optionally, you can handle form data here or just let Formspree handle it
    event.target.submit(); // Submit the form to Formspree
  };

  return (
    <form 
      className='place-order' 
      onSubmit={handleSubmit} 
      action='https://formspree.io/f/movazbkl' 
      method='post'
    >
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-field"> 
          <input type="text" placeholder='First Name' required name='firstName' />
          <input type="text" placeholder='Last Name' required name='lastName' />
        </div>
        <input type="email" placeholder='Email Address' required name='email' />
        <input type="text" placeholder='Street' required name='street' />
        <div className="multi-field"> 
          <input type="text" placeholder='City' required name='city' />
          <input type="text" placeholder='State' required name='state' />
        </div>
        <input type='tel' placeholder='Phone Number' required name='phone' />
      </div>

      <div className="place-order-right">
        <div className='cart'>
          <h2>Total Payment</h2>
          {hasItems ? (
            <div className="cart-summary">
              <div className="cart-total-details">
                <p>Subtotal:</p>
                <p>{subtotal.toFixed(2)} Birr</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee:</p>
                <p>{deliveryFee.toFixed(2)} Birr</p>
              </div>
              <div className="cart-total-details total-amount">
                <b>Total:</b>
                <b>{total.toFixed(2)} Birr</b>
              </div>
              <button type="submit" className="pay-button">PAY NOW</button>
            </div>
          ) : (
            <p className="empty-cart-message">Your cart is empty.</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;