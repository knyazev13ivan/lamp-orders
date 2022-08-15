import React, { FormEvent, useState } from "react";
import { useGetAllLampsQuery } from "../store/lamps/lamp.api";
import {
  IOrderInLine,
  useCreateOrderInLineMutation,
} from "../store/orderInLine/orderInLine.api";
import "../styles/newOrder.scss";

export interface INewOrder {
  name: string;
  number: number;
  priority: number;
  text?: string;
}

const NewOrder = () => {
  const [createOrder, { error: createError }] = useCreateOrderInLineMutation();
  const { data: allLamps } = useGetAllLampsQuery("");

  const [formState, setFormState] = useState<INewOrder>({
    name: "D-140",
    number: 1,
    priority: 0,
    text: "test new order",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmitCreateLamp = async (e: FormEvent) => {
    e.preventDefault();

    // const order = {
    //   name: "test2",
    //   number: 4,
    //   priority: 0,
    //   text: "test api mutation",
    // };
    await createOrder(formState as IOrderInLine);
  };

  return (
    <div>
      <h1>New Order In Line</h1>
      <form onSubmit={handleSubmitCreateLamp}>
        <fieldset>
          Select lamp
          <br />
          <ul>
            {allLamps &&
              allLamps.map((lamp, index) => (
                <li key={lamp.name + index}>
                  <label>
                    <input
                      type="radio"
                      name="name"
                      onChange={() =>
                        setFormState((prev) => ({ ...prev, name: lamp.name }))
                      }
                    />
                    {lamp.name}
                  </label>
                </li>
              ))}
          </ul>
          <hr />
          Number:
          <input
            type="number"
            name="number"
            value={formState.number}
            onChange={handleChange}
            min={0}
          />
          <br />
          Priority:
          <input
            type="number"
            name="priority"
            value={formState.priority}
            onChange={handleChange}
            min={0}
            max={2}
          />
          <br />
          Text:
          <input
            type="text"
            name="text"
            value={formState.text}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Add new Order</button>
        </fieldset>
      </form>

      {createError && "ERROR: " + JSON.stringify(createError)}
    </div>
  );
};

export default NewOrder;
