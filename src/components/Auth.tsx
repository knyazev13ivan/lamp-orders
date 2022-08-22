import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import "../styles/auth.scss";
import UserProfile from "./UserProfile";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.token);

  const handleClickLogout = () => {
    dispatch(logout());
    navigate("/");
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
            Выйти
          </button>
        </div>
      )}
    </>
  );
};

export default Auth;
