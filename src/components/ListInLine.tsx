import React from "react";
import {
  IOrderInLine,
  useGetOrdersInLineQuery,
} from "../store/orderInLine/orderInLine.api";
import CardInLine from "./CardInLine";
import "../styles/listInLine.scss";

const ListInLine: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInLineQuery("");

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <div>Loading...</div>}
      <ul className="list-in-line">
        {orders &&
          orders
            .slice(0)
            .sort((a, b) => b.priority - a.priority)
            .map((order: IOrderInLine) => (
              <CardInLine key={order._id} {...order} />
            ))}
      </ul>
    </>
  );
};

export default ListInLine;
