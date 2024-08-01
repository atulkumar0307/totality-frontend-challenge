import React from 'react';
import useCart from '../hooks/useCart'; // Import the custom hook
import './Cart.css'; // Import the CSS file

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    // Ensure item.price and item.quantity are valid numbers
    const price = parseFloat(item.price);
    const quantity = item.quantity ? parseInt(item.quantity, 10) : 1; // Default quantity to 1

    if (isNaN(price) || isNaN(quantity)) {
      console.error(`Invalid price or quantity for item ${item.id}:`, item);
      return total; // Skip invalid items
    }

    return total + (price * quantity);
  }, 0);

  const handleCheckout = () => {
    alert(`Proceeding to checkout. Total amount: $${totalPrice.toFixed(2)}`);
    // Replace this with actual checkout logic or integration with payment gateways
  };

  return (
    <div className="cart-container">
      <h3>Cart Items:</h3>
      {cartItems.length > 0 ? (
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-price">${parseFloat(item.price).toFixed(2)}</span>
              </div>
              <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <>
          <div className="checkout-section">
            <div className="total-price">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Pay Now</button>
          </div>
          <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
