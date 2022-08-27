import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import UserProfile from "./UserProfile";
import svgLogOut from "../icons/logOut.svg";
import "../styles/auth.scss";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.token);

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!isAuth && (
        <ul className="auth">
          <li>
            <Link to="auth/login" className="link button-auth">
              Войти
            </Link>
          </li>
          <li>
            <Link to="auth/register" className="link button-auth-reverse">
              Регистрация
            </Link>
          </li>
        </ul>
      )}
      {isAuth && (
        <div className="profile">
          <UserProfile />
          <button
            type="button"
            onClick={handleClickLogout}
            className="button-auth logout"
          >
            <img src={svgLogOut} alt="log out"/>
          </button>
        </div>
      )}
    </>
  );
};

export default React.memo(Auth);
