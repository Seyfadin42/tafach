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

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-field"> 
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Street' required />
        <div className="multi-field"> 
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <input type='tel' placeholder='Phone Number' required />
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
              <button className="pay-button">PAY NOW</button>
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