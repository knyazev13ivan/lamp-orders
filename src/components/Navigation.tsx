import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            Статус заказов
          </NavLink>
        </li>
        <li>
          <NavLink
            to="new"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            Добавить новый заказ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lamps"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            Создать новый тип
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
