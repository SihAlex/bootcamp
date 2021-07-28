import Card from "./Card";

import { Button } from "@material-ui/core";

const Modal = (props) => {
  return (
    <Card parentClass={props.className}>
      {props.content}
      <Button onClick={props.onClose}>Close</Button>
      <Button>Order</Button>
    </Card>
  );
};

export default Modal;
