import React from "react";
import {
  IOrderInLine,
  useGetOrdersInLineQuery,
} from "../store/orderInLine/orderInLine.api";
import CardInLine from "./CardInLine";
import "../styles/listInLine.scss";
import { useAppSelector } from "../store/hooks";
import Loader from "./Loader";

const ListInLine: React.FC = () => {
  const { data: orders, error, isLoading } = useGetOrdersInLineQuery("");

  const searchValue = useAppSelector((state) => state.search.searchValue);

  return (
    <>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <Loader />}
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
        {!orders && !error && !isLoading && <h3>Нет заказов в очереди</h3>}
      </ul>
    </>
  );
};

export default ListInLine;
