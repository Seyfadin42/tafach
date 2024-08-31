import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreCon = createContext(null);

const StoreConProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const remove = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev, [itemId]: prev[itemId] - 1 };
      if (newCartItems[itemId] <= 0) {
        delete newCartItems[itemId]; // Remove item if quantity is zero
      }
      return newCartItems;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addCart,
    remove,
  };

  return (
    <StoreCon.Provider value={contextValue}>
      {props.children}
    </StoreCon.Provider>
  );
};

export default StoreConProvider;