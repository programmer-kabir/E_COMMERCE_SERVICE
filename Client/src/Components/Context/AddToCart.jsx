import React, { createContext, useEffect, useState } from "react";
export const AddToCartContext = createContext(null);

const AddToCart = ({ children }) => {
  const [cartTShirtCount, setCartTShirtCount] = useState(0);
  useEffect(() => {
    const storedIdsString = localStorage.getItem("cartTShirt");
    if (storedIdsString) {
      const storedIds = JSON.parse(storedIdsString);
      setCartTShirtCount(storedIds.length);
    } else {
      setCartTShirtCount(0);
    }
  }, [setCartTShirtCount]);
  const data = {
    cartTShirtCount,
    setCartTShirtCount,
  };
  return (
    <AddToCartContext.Provider value={data}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCart;
