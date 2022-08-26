import React from "react";
import {
  IOrderInHistory,
  useDeleteOrderInHistoryMutation,
} from "../store/orderInHistory/orderInHistory.api";
import { formatDate } from "../utils/formatDate";
import svgDelete from "../icons/delete.svg";
import svgComment from "../icons/comment.svg";
import svgTime from "../icons/time.svg";
import "../styles/cardInHistory.scss";

const CardInHistory: React.FC<IOrderInHistory> = ({
  _id,
  name,
  number,
  text,
  createdAt,
}: IOrderInHistory) => {
  const [deleteOrderInHistory] = useDeleteOrderInHistoryMutation();

  const handleClickDelete = async () => {
    if (window.confirm("Вы точно отменить заказ?")) {
      await deleteOrderInHistory(_id);
    }
  };

  return (
    <div className={"card-in-history"}>
      <span className="time">
        <img src={svgTime} alt="time" />
        {formatDate(createdAt)}
      </span>

      <h3>
        <span className="name">{name}</span>
      </h3>
      <span className="number">{number} шт</span>

      <button className="delete-button" onClick={handleClickDelete}>
        <img src={svgDelete} alt="delete order" />
      </button>

      {text && (
        <p className="comment">
          <img src={svgComment} alt="comment" />
          {text}
        </p>
      )}
    </div>
  );
};

export default CardInHistory;
