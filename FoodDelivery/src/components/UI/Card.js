import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    color: "white",
    textAlign: "center",
    padding: "1rem",
    margin: "0 auto",
    marginTop: "1.4rem",
    borderRadius: "1rem",
    boxShadow: "0.1rem 0.2rem 0.6rem black",
  },
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <div className={`${classes.card} ${props.parentClass}`}>
      {props.children}
    </div>
  );
};

export default Card;
