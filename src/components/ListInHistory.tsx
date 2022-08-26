import React from "react";
import {
  IOrderInHistory,
  useGetOrdersInHistoryQuery,
} from "../store/orderInHistory/orderInHistory.api";
import CardInHistory from "./CardInHistory";
import "../styles/listInHistory.scss";

const ListInHistory: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInHistoryQuery("");

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <div>Loading...</div>}
      <ul className="list-in-history">
        {orders &&
          orders
            .slice(0)
            // .sort((a, b) => b.priority - a.priority)
            .map((order: IOrderInHistory) => (
              <CardInHistory key={order._id} {...order} />
            ))}
      </ul>
    </>
  );
};

export default ListInHistory;
