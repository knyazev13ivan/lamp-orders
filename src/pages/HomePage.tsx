import React from "react";
import ListInLine from "../components/ListInLine";
import {
  IOrderInLine,
  useCreateOrderMutation,
} from "../store/orderInLine/orderInLine.api";
import "../styles/homePage.scss";

const HomePage: React.FC = () => {
  const [createOrder, {error: createError}] = useCreateOrderMutation();

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
    <>
      <button onClick={handleClick}>Add New Order</button>
      {createError && console.log('ERROR: ', createError)}
      <ListInLine />
    </>
  );
};

export default HomePage;
