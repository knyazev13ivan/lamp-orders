import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest, useSignInMutation } from "../store/auth/auth.api";
import { setCredentials } from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";
import svgClose from "../icons/close.svg";
import "../styles/login.scss";
import Loader from "../components/Loader";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<LoginRequest>({
    login: "guest",
    password: "guest",
  });

  const [signIn, { isLoading: isLoadingUser, error: errorUser }] =
    useSignInMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmitSignIn = async (e: FormEvent) => {
    e.preventDefault();
    const user = await signIn(formState).unwrap();
    dispatch(setCredentials(user));
    navigate("/");
  };

  const handleClickClose = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <h2>Вход</h2>
      <button onClick={handleClickClose} className="button-close">
        <img src={svgClose} alt="close" />
      </button>
      <form onSubmit={handleSubmitSignIn}>
        <label className="label-text-field">
          <span className="label-text">Логин</span>
          <input
            type="text"
            value={formState.login}
            onChange={handleChange}
            name="login"
            id="loginInput"
          />
        </label>
        <label className="label-text-field">
          <span className="label-text">Пароль</span>
          <input
            type="password"
            value={formState.password}
            onChange={handleChange}
            name="password"
            id="passwordInput"
          />
        </label>
        <button type="submit" className="sign-in button-sign-in">
          Войти
        </button>
        <div className="description-to-sign-up">
          Нет аккаунта?
          <Link to="../../auth/register" className="sign-up">
            Зарегистрируйся!
          </Link>
        </div>
      </form>
      {isLoadingUser && <Loader />}
      {errorUser && JSON.stringify(errorUser, null, 2)}
    </div>
  );
};

export default Login;
