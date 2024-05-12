// FavoriteCountContext.js
import React, { createContext, useContext, useState } from "react";

const FavoriteCountContext = createContext();

export const useFavoriteCount = () => useContext(FavoriteCountContext);

export const FavoriteCountProvider = ({ children }) => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  return (
    <FavoriteCountContext.Provider value={{ favoriteCount, setFavoriteCount }}>
      {children}
    </FavoriteCountContext.Provider>
  );
};
