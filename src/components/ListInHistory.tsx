import React from "react";
import {
  IOrderInHistory,
  useGetOrdersInHistoryQuery,
} from "../store/orderInHistory/orderInHistory.api";
import CardInHistory from "./CardInHistory";
import "../styles/listInHistory.scss";
import { useAppSelector } from "../store/hooks";

const ListInHistory: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInHistoryQuery("");

  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <div>Loading...</div>}
      <ul className="list-in-history">
        {orders &&
          orders
            .slice(0)
            .filter(
              (order) =>
                order.name.includes(searchValue) ||
                order.text.includes(searchValue)
            )
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((order: IOrderInHistory) => (
              <CardInHistory key={order._id} {...order} />
            ))}
      </ul>
    </>
  );
};

export default ListInHistory;
