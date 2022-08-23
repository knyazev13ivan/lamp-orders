import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest, useRegisterMutation } from "../store/auth/auth.api";
import { setCredentials } from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";
import svgClose from "../icons/close.svg";
import "../styles/registration.scss";

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<RegisterRequest>({
    login: "",
    password: "",
    fullName: "",
  });

  const [register, { isLoading: isLoadingUser, error: errorUser }] =
    useRegisterMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmitSignIn = async (e: FormEvent) => {
    e.preventDefault();
    const user = await register(formState).unwrap();
    dispatch(setCredentials(user));
    navigate("/");
  };

  const handleClickClose = () => {
    navigate("/");
  };

  return (
    <div className="registration-page">
      <h2>Регистрация</h2>
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
            id="loginField"
          />
        </label>
        <label className="label-text-field">
          <span className="label-text">Пароль</span>
          <input
            type="password"
            value={formState.password}
            onChange={handleChange}
            name="password"
            id="passwordField"
          />
        </label>
        <label className="label-text-field">
          <span className="label-text">Имя</span>
          <input
            type="text"
            value={formState.fullName}
            onChange={handleChange}
            name="fullName"
            id="fullNameField"
          />
        </label>
        <button type="submit" className="sign-up button-sign-up">
          Готово
        </button>
      </form>
      {isLoadingUser && <div>'Loading...'</div>}
      {errorUser && JSON.stringify(errorUser)}
    </div>
  );
};

export default Registration;
