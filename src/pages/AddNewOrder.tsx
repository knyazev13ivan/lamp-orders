import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllLampsQuery } from "../store/lamps/lamp.api";
import {
  IOrderInLine,
  useCreateOrderInLineMutation,
} from "../store/orderInLine/orderInLine.api";
import svgPlus from "../icons/plus.svg";
import "../styles/addNewOrder.scss";

export interface INewOrder {
  name: string;
  number: number;
  priority: number;
  text?: string;
}

const AddNewOrder: React.FC = () => {
  const [createOrder, { error: createError }] = useCreateOrderInLineMutation();
  const { data: allLamps } = useGetAllLampsQuery("");

  const navigate = useNavigate();

  const [formState, setFormState] = useState<INewOrder>({
    name: "",
    number: 1,
    priority: 0,
    text: "",
  });

  const priorities = ["На склад", "Обычный", "Срочный"];

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmitCreateLamp = async (e: FormEvent) => {
    e.preventDefault();

    await createOrder(formState as IOrderInLine);

    navigate("/");
  };

  return (
    <div className="add-new-order-page">
      <form onSubmit={handleSubmitCreateLamp}>
        <div className="category-caption">Выберите тип</div>
        <ul className="lamps-list">
          {allLamps &&
            allLamps.map((lamp, index) => (
              <li key={lamp.name + index} className="lamp-name">
                <input
                  type="radio"
                  name="name"
                  id={lamp.name + index}
                  onChange={() =>
                    setFormState((prev) => ({ ...prev, name: lamp.name }))
                  }
                />
                <label htmlFor={lamp.name + index}>{lamp.name}</label>
              </li>
            ))}
          <li key="newLamp" className="lamp-name">
            <Link to="../lamps" className="button-add-new-lamp">
              <img src={svgPlus} alt="add new lamp type" />
            </Link>
          </li>
        </ul>

        <label className="label-text-field number-field">
          <span className="label-text">Колличество</span>
          <input
            type="number"
            name="number"
            value={formState.number}
            onChange={handleChange}
            min={0}
          />
        </label>

        <div className="priority-block">
          <span className="category-caption">Приоритет</span>
          <ul className="priority-list">
            {priorities.map((priority, index) => (
              <li key={priority + index} className="priority-status">
                <input
                  type="radio"
                  name="priority"
                  id={"radio-priority-" + index}
                  onChange={() =>
                    setFormState((prev) => ({ ...prev, priority: index }))
                  }
                />
                <label htmlFor={"radio-priority-" + index}>
                  <span className={"priority-color-" + index}>{priority}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <label className="label-text-field">
          <span className="label-text">Комментарий (опционально)</span>
          <textarea
            name="text"
            id="comment"
            cols={20}
            rows={5}
            onChange={handleChange}
          >
            {formState.text}
          </textarea>
        </label>

        <button type="submit" className="button-add">
          Добавить в очередь
        </button>
      </form>

      {createError && "ERROR: " + JSON.stringify(createError)}
    </div>
  );
};

export default AddNewOrder;
