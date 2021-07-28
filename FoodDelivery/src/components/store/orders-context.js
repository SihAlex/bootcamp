import React from "react";

import { useState } from "react";

export const OrdersContext = React.createContext({
  numberOfOrders: 0,
  onNumberOfOrdersChange: (number) => {},
  showCart: false,
  showOrders: () => {},
  hideOrders: () => {},
  orders: [],
});

const orders = [];

export const OrdersContextProvider = (props) => {
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const showOrders = () => {
    setShowCart(true);
  };

  const hideOrders = () => {
    setShowCart(false);
  };

  const numberOfOrdersChangeHandler = (name, price, number) => {
    setNumberOfOrders((prev) => prev + number);
    let order = { name: name, price: price, amount: number };
    orders.push(order);
  };

  return (
    <OrdersContext.Provider
      value={{
        numberOfOrders: numberOfOrders,
        onNumberOfOrdersChange: numberOfOrdersChangeHandler,
        showCart: showCart,
        showOrders: showOrders,
        hideOrders: hideOrders,
        orders: orders,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};
