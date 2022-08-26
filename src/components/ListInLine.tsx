import React from "react";
import {
  IOrderInLine,
  useGetOrdersInLineQuery,
} from "../store/orderInLine/orderInLine.api";
import CardInLine from "./CardInLine";
import "../styles/listInLine.scss";
import { useAppSelector } from "../store/hooks";

const ListInLine: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInLineQuery("");

  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <div>Loading...</div>}
      <ul className="list-in-line">
        {orders &&
          orders
            .slice(0)
            .filter(
              (order) =>
                order.name.includes(searchValue) ||
                order.text.includes(searchValue)
            )
            .sort((a, b) => b.priority - a.priority)
            .map((order: IOrderInLine) => (
              <CardInLine key={order._id} {...order} />
            ))}
      </ul>
    </>
  );
};

export default ListInLine;
