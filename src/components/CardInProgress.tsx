import React from "react";
import {
  IOrderInProgress,
  useDeleteOrderInProgressMutation,
  useToogleIsPauseMutation,
} from "../store/orderInProgress/orderInProgress.api";
import ProgressSteps from "./ProgressSteps";
import { formatDate } from "../utils/formatDate";
import svgDelete from "../icons/delete.svg";
import svgComment from "../icons/comment.svg";
import svgTime from "../icons/time.svg";
import svgPlay from "../icons/play.svg";
import svgPause from "../icons/pause.svg";
import svgCompliteOrder from "../icons/compliteOrder.svg";
import "../styles/cardInProgress.scss";
import { useCreateOrderInHistoryMutation } from "../store/orderInHistory/orderInHistory.api";

const CardInProgress: React.FC<IOrderInProgress> = ({
  _id,
  order,
  locksmith,
  painter,
  millwright,
  isPause,
}: IOrderInProgress) => {
  const cardClass = `card-in-progress priority-${order.priority} ${
    isPause ? "pause" : ""
  }`;

  const [deleteOrder] = useDeleteOrderInProgressMutation();
  const [toogleIsPause] = useToogleIsPauseMutation();

  const [createOrderInHistory, { error: errorCreateOrderInHistory }] =
    useCreateOrderInHistoryMutation();

  const handleClickDelete = async () => {
    if (window.confirm("Вы точно отменить заказ?")) {
      await deleteOrder(_id);
    }
  };

  const handleClickEndOrder = async () => {
    await createOrderInHistory({ id: _id });
    await deleteOrder(_id);
  };

  const handleClickToogleIsPause = async () => {
    await toogleIsPause({ id: _id, step: "isPause", operations: !isPause });
  };

  return (
    <div className={cardClass}>
      {errorCreateOrderInHistory && JSON.stringify(errorCreateOrderInHistory)}

      <span className="priority">
        Приоритет:
        {order.priority === 0 && " На склад"}
        {order.priority === 1 && " Обычный"}
        {order.priority === 2 && " Срочный"}
      </span>

      <span className="time">
        <img src={svgTime} alt="time" />
        {formatDate(order.createdAt)}
      </span>

      <h3>
        <span className="name">
          {order.name}
          <button className="end-order" onClick={handleClickEndOrder}>
            <img src={svgCompliteOrder} alt="complite order" />
            Завершить
          </button>
        </span>

        <span className="number">{order.number} шт</span>

        <button onClick={handleClickToogleIsPause} className="toogle-pause">
          {isPause ? (
            <span>
              <img src={svgPlay} alt="play" />
              Продолжить
            </span>
          ) : (
            <span>
              <img src={svgPause} alt="pause" />
              Остановить
            </span>
          )}
        </button>
      </h3>

      {order.text && (
        <p className="comment">
          <img src={svgComment} alt="comment" />
          {order.text}
        </p>
      )}
      {!order.text && <br />}

      <button className="delete-button" onClick={handleClickDelete}>
        <img src={svgDelete} alt="delete order" />
      </button>

      <ProgressSteps
        operations={locksmith}
        id={_id}
        step="locksmith"
        name="Изготовление корпуса"
      />
      <ProgressSteps
        operations={painter}
        id={_id}
        step="painter"
        name="Покраска"
      />
      <ProgressSteps
        operations={millwright}
        id={_id}
        step="millwright"
        name="Монтаж и сборка"
      />
    </div>
  );
};

export default React.memo(CardInProgress);
