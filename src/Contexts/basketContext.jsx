import React, { createContext, useState, useContext } from 'react';

export const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{ basket, setBasket}}>
      {children}
    </BasketContext.Provider>
  );
};
