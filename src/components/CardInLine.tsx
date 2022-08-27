import React from "react";
import {
  IOrderInLine,
  useDeleteOrderInLineMutation,
} from "../store/orderInLine/orderInLine.api";
import { useCreateOrderInProgressMutation } from "../store/orderInProgress/orderInProgress.api";
import { formatDate } from "../utils/formatDate";
import svgDelete from "../icons/delete.svg";
import svgArrowRight from "../icons/arrowRight.svg";
import svgComment from "../icons/comment.svg";
import svgTime from "../icons/time.svg";
import "../styles/cardInLine.scss";

const CardInLine: React.FC<IOrderInLine> = ({
  _id,
  name,
  number,
  priority,
  text,
  createdAt,
}: IOrderInLine) => {
  const priorityClass = "priority-" + priority;

  const [deleteOrderInLine] = useDeleteOrderInLineMutation();
  const [createOrderInProgress, { error: errorCreateOrderInProgress }] =
    useCreateOrderInProgressMutation();

  const handleClickDelete = async () => {
    if (window.confirm("Вы точно отменить заказ?")) {
      await deleteOrderInLine(_id);
    }
  };

  const handleClickStart = async () => {
    await createOrderInProgress({ id: _id });
    await deleteOrderInLine(_id);
  };

  return (
    <div className={"card-in-line " + priorityClass}>
      {errorCreateOrderInProgress && JSON.stringify(errorCreateOrderInProgress)}

      <p className={"priority "}>
        Приоритет:
        {priority === 0 && " На склад"}
        {priority === 1 && " Обычный"}
        {priority === 2 && " Срочный"}
      </p>

      <span className="time">
        <img src={svgTime} alt="time" />
        {formatDate(createdAt)}
      </span>

      <h3>
        <span className="name">{name}</span>
        <span className="number">{number} шт</span>
      </h3>

      {text && (
        <p className="comment">
          <img src={svgComment} alt="comment" />
          {text}
        </p>
      )}

      <button className="start-order" onClick={handleClickStart}>
        Принять заказ
        <img src={svgArrowRight} alt="start order" />
      </button>

      <button className="delete-button" onClick={handleClickDelete}>
        <img src={svgDelete} alt="delete order" />
      </button>
    </div>
  );
};

export default React.memo(CardInLine);
