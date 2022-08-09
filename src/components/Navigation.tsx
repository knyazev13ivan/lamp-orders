import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";

const Navigation = () => {
  return (
    <nav>
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
            to="auth/login"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink
            to="auth/me"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
