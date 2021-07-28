import { useContext, useState } from "react";

import { makeStyles, Button } from "@material-ui/core";

import { OrdersContext } from "../store/orders-context";
import Cart from "../Cart/Cart";

const useStyles = makeStyles(() => ({
  cartButton: {
    backgroundColor: "#421102",
    borderRadius: "1rem",
    color: "white",
    font: "inherit",
    fontWeight: "bold",
    "&:hover, &:active": { backgroundColor: "#2c0d00" },
  },
}));

const CartButton = (props) => {
  const classes = useStyles();
  const ordersCtx = useContext(OrdersContext);

  return (
    <>
      <Button onClick={ordersCtx.showOrders} className={classes.cartButton}>
        Your Cart {ordersCtx.numberOfOrders}
      </Button>
      {ordersCtx.showCart && <Cart />}
    </>
  );
};

export default CartButton;
