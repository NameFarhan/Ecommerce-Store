import { createContext, useContext, useEffect, useState } from "react";

// Creating a context for the cart
export const CartContext = createContext();

// CartContextProvider component that provides the context value
export const CartContextProvider = ({ children }) => {
  const [cartPro, setCartPro] = useState(() => {
    // Initialize state from localStorage, if available
    const storedCart = localStorage.getItem("cartPro");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Function to add a product to the cart with a specified quantity
  const handleAddToCart = (product, quantity) => {
    setCartPro((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Product exists, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Product does not exist, add it to the cart
        const productWithQuantity = { ...product, quantity };
        return [...prevCart, productWithQuantity];
      }
    });
  };

  // Function to remove all products from the cart
  const handleRemoveAllFromCart = () => {
    setCartPro([]);
  };

  // Save cart to localStorage whenever cartPro changes
  useEffect(() => {
    localStorage.setItem("cartPro", JSON.stringify(cartPro));
  }, [cartPro]);

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
