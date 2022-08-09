import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRequest, useSignInMutation } from "../store/auth/auth.api";
import { setCredentials, logout } from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<LoginRequest>({
    login: "manager",
    password: "lampmn",
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
    // navigate("/");
  };

  const handleClickLogout = async () => await dispatch(logout);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmitSignIn(e)}>
        <fieldset>
          Username
          <input
            type="text"
            value={formState.login}
            onChange={handleChange}
            name="login"
            id="loginField"
          />
          Password
          <input
            type="password"
            value={formState.password}
            onChange={handleChange}
            name="password"
            id="passwordField"
          />
          <button type="submit">Sign in</button>
          <button type="button" onClick={handleClickLogout}>
            Logout
          </button>
        </fieldset>
      </form>
      {isLoadingUser && <div>'Loading...'</div>}
      {errorUser && console.log("errorUser: ", errorUser)}
    </>
  );
};

export default Login;
