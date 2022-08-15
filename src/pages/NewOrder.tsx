import React, { FormEvent, useState } from "react";
import { IOrderInLine, useCreateOrderInLineMutation } from "../store/orderInLine/orderInLine.api";
import "../styles/newOrder.scss";

const NewOrder = () => {
  const [createOrder, {error: createError}] = useCreateOrderInLineMutation();

  const [formState, setFormState] = useState<{ name: string }>({
    name: "D-140",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmitCreateLamp = async (e: FormEvent) => {
    e.preventDefault();

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
      <form onSubmit={handleSubmitCreateLamp}>
        <fieldset>
          Lamp name
          <input
            type="text"
            value={formState.name}
            onChange={handleChange}
            name="name"
            id="nameField"
          />
          
          <button type="submit">Add new Order</button>
        </fieldset>
      </form>

      {createError && 'ERROR: ' + JSON.stringify(createError)}
  </div>);
};

export default NewOrder;
