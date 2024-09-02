import { createContext, useContext, useState } from "react";

// Creating a context for the cart
export const CartContext = createContext();

// CartContextProvider component that provides the context value
export const CartContextProvider = ({ children }) => {
  const [cartPro, setCartPro] = useState([]);

  // Function to add a product to the cart with a specified quantity
  const handleAddToCart = (product, quantity) => {
    const productWithQuantity = { ...product, quantity };
    setCartPro((prevCart) => [...prevCart, productWithQuantity]);
  };

  // Function to remove all products from the cart
  const handleRemoveAllFromCart = () => {
    setCartPro([]);
  };
  
  // The context value that will be supplied to any descendants of this component
  const contextValue = {
    cartPro,
    handleAddToCart,
    handleRemoveAllFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCartContext = () => {
  return useContext(CartContext);
};
