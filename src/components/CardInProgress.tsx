import React from "react";
import {
  IOrderInProgress,
  useDeleteOrderInProgressMutation,
} from "../store/orderInProgress/orderInProgress.api";
import "../styles/cardInProgress.scss";
import ProgressSteps from "./ProgressSteps";

const CardInProgress: React.FC<IOrderInProgress> = ({
  _id,
  order,
  locksmith,
  painter,
  millwright,
  isPause,
}: IOrderInProgress) => {
  const priorityClass = "priority-" + order.priority;

  const [deleteOrder] = useDeleteOrderInProgressMutation();

  const handleClickDelete = async () => {
    await deleteOrder(_id);
  };

  return (
    <div className="card-in-progress">
      <p>
        Приоритет:
        <span className={priorityClass}>
          {order.priority === 2 ? " Срочный" : " Обычный"}
        </span>
        <button onClick={handleClickDelete}>Delete</button>
      </p>
      <p>Статус: {isPause ? "Не активно" : "Активно"}</p>
      <h3>{order.name}</h3>
      <p>Колличество: {order.number} шт.</p>
      <p>Комментарий: {order.text}</p>
      <hr />
      <ProgressSteps operations={locksmith} id={_id} step="locksmith" />
      <ProgressSteps operations={painter} id={_id} step="painter" />
      <ProgressSteps operations={millwright} id={_id} step="millwright" />
    </div>
  );
};

export default CardInProgress;
