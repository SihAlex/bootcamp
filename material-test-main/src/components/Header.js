import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  greet: {
    padding: "1.2rem 0",
    display: "flex",
    "justify-content": "center",
    font: "bolder 2.2rem Arial, sans-serif",
    "background-color": "rgb(5, 187, 187)",
    color: "white",
    "& > *": {
      "max-width": "50rem",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  let greet = <div>Choose the one form you'd like to work with!</div>;

  return <div className={classes.greet}>{greet}</div>;
}
