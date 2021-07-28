import Item from "./Item";
import Card from "../UI/Card";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  meals: {
    backgroundColor: "#ffffff",
    color: "black",
    maxWidth: "70%",
  },
  mealsList: {
    listStyle: "none",
    padding: "0",
    "& > li:not(:last-child)": {
      borderBottom: "solid 0.1rem lightgray",
      padding: "0 0 1rem",
    },
  },
}));

const meals = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    description: "A german speciality!",
    price: 16.5,
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = () => {
  const classes = useStyles();

  return (
    <Card parentClass={classes.meals}>
      <ul className={classes.mealsList}>
        {meals.map((meal) => (
          <li>
            <Item
              key={Math.random()}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MealsList;
