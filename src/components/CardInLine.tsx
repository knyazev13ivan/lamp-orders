import React from "react";
import {
  IOrderInLine,
  useDeleteOrderInLineMutation,
} from "../store/orderInLine/orderInLine.api";
import { useCreateOrderInProgressMutation } from "../store/orderInProgress/orderInProgress.api";
import "../styles/cardInLine.scss";

const CardInLine: React.FC<IOrderInLine> = ({
  _id,
  name,
  number,
  priority,
  text,
}: IOrderInLine) => {
  const priorityClass = "priority-" + priority;

  const [deleteOrderInLine] = useDeleteOrderInLineMutation();
  const [createOrderInProgress, { error: errorCreateOrderInProgress }] =
    useCreateOrderInProgressMutation();

  const handleClickDelete = async () => {
    await deleteOrderInLine(_id);
  };

  const handleClickStart = async () => {
    await createOrderInProgress({ id: _id });
    await deleteOrderInLine(_id);
  };

  return (
    <div className="card">
      {errorCreateOrderInProgress && JSON.stringify(errorCreateOrderInProgress)}
      <p>
        Приоритет:
        <span className={priorityClass}>
          {priority === 2 ? " Срочный" : " Обычный"}
        </span>
        <button onClick={handleClickDelete}>Delete</button>
      </p>
      <h3>{name}</h3>
      <p>Колличество: {number} шт.</p>
      <p>Комментарий: {text}</p>
      <div>
        <button onClick={handleClickStart}>Принять заказ &gt;&gt;</button>
      </div>
    </div>
  );
};

export default CardInLine;
