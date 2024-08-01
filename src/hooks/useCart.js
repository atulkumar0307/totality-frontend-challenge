import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (property) => {
    const existingItem = cartItems.find(item => item.id === property.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    } else {
      const updatedItems = [...cartItems, { ...property, quantity: 1 }];
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    }
  };

  const updateQuantity = (property, change) => {
    const updatedItems = cartItems.map(item =>
      item.id === property.id ? { ...item, quantity: item.quantity + change } : item
    ).filter(item => item.quantity > 0);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeFromCart = (property) => {
    const updatedItems = cartItems.filter(item => item.id !== property.id);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return { cartItems, addToCart, updateQuantity, removeFromCart, clearCart };
};

export default useCart;
