import { createContext } from "react";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {

  // for creating an item
  const addItem = async (item, cb) => {
    try {
      // we will send a POST request with the data required to create an item
      const res = await fetch("/api/createItem", {
        method: "POST",
        body: JSON.stringify(item),
        headers: { 
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'application/json',
         },
      });
      const newItem = await res.json();
      // then we will update the 'items' adding the newly added item to it
      if (cb) cb(newItem)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ItemsContext.Provider
      value={{
        addItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };