import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage if available
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return savedCartItems;
  });

  const addToCart = (property) => {
    const updatedItems = [...cartItems, property];
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
