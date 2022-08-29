import React from "react";
import {
  IOrderInProgress,
  useGetOrdersInProgressQuery,
} from "../store/orderInProgress/orderInProgress.api";
import CardInProgress from "./CardInProgress";
import "../styles/listInProgress.scss";
import { useAppSelector } from "../store/hooks";
import Loader from "./Loader";

const ListInProgress: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInProgressQuery("");

  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <Loader />}
      <ul className="list-in-progress">
        {orders &&
          orders
            .slice(0)
            .filter(
              ({ order }) =>
                order.name.includes(searchValue) ||
                order.text.includes(searchValue)
            )
            .sort((a, b) => b.order.priority - a.order.priority)
            .map((order: IOrderInProgress) => (
              <CardInProgress key={order._id} {...order} />
            ))}
        {!orders && !error && !isLoading && <h3>Нет активных заказов</h3>}
      </ul>
    </>
  );
};

export default ListInProgress;
