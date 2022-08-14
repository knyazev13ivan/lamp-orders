import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRequest, useRegisterMutation } from "../store/auth/auth.api";
import { setCredentials } from "../store/auth/authSlice";
import { useAppDispatch } from "../store/hooks";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<RegisterRequest>({
    login: "test1",
    password: "test1",
    fullName: "test1",
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

  return (
    <div>
      <h1>Registeration</h1>
      <form onSubmit={handleSubmitSignIn}>
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
          fullName
          <input
            type="text"
            value={formState.fullName}
            onChange={handleChange}
            name="fullName"
            id="fullNameField"
          />
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
      {isLoadingUser && <div>'Loading...'</div>}
      {errorUser && JSON.stringify(errorUser)}
    </div>
  );
};

export default Register;
