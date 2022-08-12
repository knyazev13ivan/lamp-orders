import React from "react";
import {
  IOrderInLine,
  useDeleteOrderInLineMutation,
} from "../store/orderInLine/orderInLine.api";
import "../styles/cardInLine.scss";

const CardInLine: React.FC<IOrderInLine> = ({
  _id,
  name,
  number,
  priority,
  text,
}: IOrderInLine) => {
  const priorityClass = "priority-" + priority;

  const [deleteOrder] = useDeleteOrderInLineMutation();

  const handleClickDelete = async () => {
    await deleteOrder(_id);
  };

  const handleClickStart = async () => {
    // await 
    await deleteOrder(_id);
  };

  return (
    <div className="card">
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
