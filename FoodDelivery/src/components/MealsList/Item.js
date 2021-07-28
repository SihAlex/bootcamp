import { Button, makeStyles } from "@material-ui/core";
import { useState, useContext } from "react";
import { OrdersContext } from "../store/orders-context";

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& > .amount": {
        display: "flex",
      },
    },
  },
}));

const Item = (props) => {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const ordersCtx = useContext(OrdersContext);

  const addHandler = (name, price) => {
    ordersCtx.onNumberOfOrdersChange(name, price, amount);
  };

  const classes = useStyles();
  return (
    <div className={classes.item}>
      <div>
        <p>{props.name} </p>
        <p>{props.description} </p>
        <p>{props.price} </p>
      </div>
      <div>
        <div className="amount">
          Amount
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <Button
          variant="contained"
          onClick={() => {
            addHandler(props.name, props.price);
          }}
        >
          + Add
        </Button>
      </div>
    </div>
  );
};

export default Item;
