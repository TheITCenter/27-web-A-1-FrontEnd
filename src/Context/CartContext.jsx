import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
  
      if (existingProduct) {
      
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
     
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product._id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(product => 
      product._id === productId ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(product => 
      product._id === productId ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 } : product
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, setCart }}>
      {children}
    </CartContext.Provider>
  );
};