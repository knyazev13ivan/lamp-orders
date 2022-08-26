import React from "react";
import {
  IOrderInProgress,
  useGetOrdersInProgressQuery,
} from "../store/orderInProgress/orderInProgress.api";
import CardInProgress from "./CardInProgress";
import "../styles/listInProgress.scss";
import { useAppSelector } from "../store/hooks";

const ListInProgress: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInProgressQuery("");

  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && "Loading..."}
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
      </ul>
    </>
  );
};

export default ListInProgress;
