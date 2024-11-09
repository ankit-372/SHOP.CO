import { createContext, useState } from 'react';
import SHOP_DATA from '../assets/shop-data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  SHOP_DATA.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = SHOP_DATA.reduce((total, item) => {
      const itemQuantity = cartItems[item.id] || 0;
      return total + item.new_price * itemQuantity;
    }, 0);

    if (isPromoApplied) {
      totalAmount *= 0.8; // Apply 20% discount if promo code is applied
    }

    return totalAmount.toFixed(2);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const applyPromoCode = (code) => {
    if (code === 'SAVE20') {
      setIsPromoApplied(true);
      return true; // Promo code is valid
    }
    setIsPromoApplied(false);
    return false; // Promo code is invalid
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    SHOP_DATA,
    cartItems,
    addToCart,
    removeFromCart,
    applyPromoCode,
    isPromoApplied,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
