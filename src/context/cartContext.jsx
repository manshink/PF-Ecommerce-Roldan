
import { createContext, useState } from "react";

const cartContext = createContext({ cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function getTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.count * item.price;
    });

    return totalPrice;
  }

  function removeItem(id) {

    const newCartState = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartState); 
  }

  function addItem({ price, id, title, img, count }) {
    const copyCartItems = [...cartItems];


    copyCartItems.push({
      id: id,
      title: title,
      img: img,
      count: count,
      price: price,
    });
    setCartItems(copyCartItems);


  }

  function clearCart() {
    setCartItems([]); 
}




  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        clearCart,
        countItemsInCart,
        addItem,
        removeItem,
        getTotalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;