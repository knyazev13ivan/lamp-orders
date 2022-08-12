import React from "react";
import { IOrderInLine, useCreateOrderInLineMutation } from "../store/orderInLine/orderInLine.api";
import "../styles/newOrder.scss";

const NewOrder = () => {
  const [createOrder, {error: createError}] = useCreateOrderInLineMutation();

  const handleClick = async () => {
    const order = {
      _id: 'sdcfv8',
      name: "test2",
      number: 4,
      priority: 0,
      text: "test api mutation",
    };
    await createOrder(order as IOrderInLine);
  };

  return (
    <div >
      <h1>New Order In Line</h1>
      <button onClick={handleClick}>Add New Order</button>
      {createError && 'ERROR: ' + JSON.stringify(createError)}
  </div>);
};

export default NewOrder;
