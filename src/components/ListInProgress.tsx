import React from "react";
import {
  IOrderInProgress,
  useGetOrdersInProgressQuery,
} from "../store/orderInProgress/orderInProgress.api";
import CardInProgress from "./CardInProgress";
import "../styles/listInProgress.scss";

const ListInProgress: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInProgressQuery("");

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <div>Loading...</div>}
      <ul className="list-in-progress">
        {orders &&
          orders.map((order: IOrderInProgress) => (
            <CardInProgress key={order._id} {...order} />
          ))}
      </ul>
    </>
  );
};

export default ListInProgress;
