import Modal from "../UI/Modal";
import reactDom from "react-dom";
import { useContext } from "react";

import { makeStyles } from "@material-ui/core";
import { OrdersContext } from "../store/orders-context";

const useStyles = makeStyles({
  modal: {
    position: "fixed",
    top: "30vh",
    left: "10%",
    color: "black",
    backgroundColor: "white",
    zIndex: 100,
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 10,
    background: "rgba(0, 0, 0, 0.75)",
  },
});

const Cart = (props) => {
  const classes = useStyles();
  const ordersCtx = useContext(OrdersContext);
  return (
    <>
      {reactDom.createPortal(
        <div className={classes.backdrop}></div>,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <Modal
          content={ordersCtx.orders.map((order) => (
            <div>
              {order.name} - {order.amount} - {order.price * order.amount}$
            </div>
          ))}
          className={classes.modal}
          onClose={ordersCtx.hideOrders}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Cart;
