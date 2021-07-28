import Card from "../UI/Card";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  infoCard: {
    backgroundColor: "#363639",
    maxWidth: "45%",
  },
}));

const InfoCard = () => {
  const classes = useStyles();

  return (
    <Card parentClass={classes.infoCard}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjou a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with igh-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default InfoCard;
