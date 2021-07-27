import CartButton from "./CartButton";

import { Box } from "@material-ui/core";

const Header = () => {
  return (
    <Box padding="0 10%" color="white" bgcolor="#8c2506" display="flex" justifyContent="space-between">
      <h2>ReactMeals</h2>
      <CartButton />
    </Box>
  );
};

export default Header;
