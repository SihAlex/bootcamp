import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cartButton: {
    backgroundColor: "#421102",
    borderRadius: "1.1rem",
    color: "white",
    font: "inherit",
    fontWeight: "bold",
    height: "auto",
    "&:hover, &:active": { backgroundColor: "#2c0d00" },
  },
}));

const CartButton = () => {
  const classes = useStyles();

  return <Button className={classes.cartButton}>Your Cart {0}</Button>;
};

export default CartButton;
