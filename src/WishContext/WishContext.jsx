import { createContext, useContext, useState, useEffect } from "react";

export const WishContext = createContext();

export const WishContextProvider = ({ children }) => {
  const [wishpro, setWishPro] = useState(() => {
    const savedWishlist = localStorage.getItem("wishpro");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishpro", JSON.stringify(wishpro));
  }, [wishpro]);

  const handleAddWish = (wishItem) => {
    setWishPro((prevWishes) => {
      // Check if the item is already in the wishlist
      if (!prevWishes.some((item) => item.id === wishItem.id)) {
        return [...prevWishes, wishItem];
      }
      return prevWishes; // Return unchanged array if item already exists
    });
  };

  const handleRemoveWish = (wishItemId) => {
    setWishPro((prevWishes) => prevWishes.filter((item) => item.id !== wishItemId));
  };

  return (
    <WishContext.Provider value={{ wishpro, handleAddWish, handleRemoveWish }}>
      {children}
    </WishContext.Provider>
  );
};

export const useWishContext = () => {
  return useContext(WishContext);
};
