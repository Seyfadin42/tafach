import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';
import { StoreCon } from '../../context/StoreCon';

function Cart() {
  const { cartItems, food_list, remove } = useContext(StoreCon);
  const navigate = useNavigate();

  const subtotal = food_list.reduce((sum, item) => {
    return sum + (item.price * (cartItems[item._id] || 0));
  }, 0);

  const deliveryFee = subtotal > 0 ? 10 : 0; // Set delivery fee to 10 if there are items
  const total = subtotal + deliveryFee; // Calculate total

  const handleCheckout = () => {
    navigate('/place-order', {
      state: {
        subtotal,
        deliveryFee,
        total,
      },
    });
  };

  return (
    <div className='cart'>
      <h2>Your Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <tr key={item._id}>
                  <td><img src={item.image} alt={item.name} className="cart-image" /></td>
                  <td>{item.name}</td>
                  <td>{item.price.toFixed(2)} Birr</td>
                  <td>{cartItems[item._id]}</td>
                  <td>{(item.price * cartItems[item._id]).toFixed(2)} Birr</td>
                  <td>
                    <button className="remove-button" onClick={() => remove(item._id)}>X</button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <div className="cart-bottom">
        <h2>Cart Total</h2>
        <div className="cart-total-details">
          <div className="total-item">
            <p>Subtotal</p>
            <p>{subtotal.toFixed(2)} Birr</p>
          </div>
          <div className="total-item">
            <p>Delivery Fee</p>
            <p>{deliveryFee.toFixed(2)} Birr</p>
          </div>
          <div className="total-item total-amount">
            <b>Total</b>
            <b>{total.toFixed(2)} Birr</b>
          </div>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;