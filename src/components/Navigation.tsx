import React from "react";
import { NavLink } from "react-router-dom";
import svgPlus from "../icons/plus.svg";
import "../styles/navigation.scss";

const Navigation: React.FC = () => {
  return (
    <nav className="nav-menu">
      <ul>
        <li>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            Заказы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="history"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            История
          </NavLink>
        </li>
        <li>
          <NavLink
            to="new"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            <img src={svgPlus} alt="add new order" />
            <span className="new-order-caption">Новый заказ</span>
          </NavLink>
        </li>
        <li className="new-lamp-item-menu">
          <NavLink
            to="lamps"
            className={({ isActive }) => (isActive ? "active " : "") + "link"}
          >
            <img src={svgPlus} alt="add new lamp type" />
            Новый тип
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
