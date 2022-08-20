import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.scss";

const Auth = () => {
  return (
    <ul className="auth">
      <li>
        <Link to="auth/login" className="link">
          Sign in
        </Link>
      </li>
      <li>
        <Link to="auth/register" className="link">
          Registration
        </Link>
      </li>
      <li>
        <Link to="auth/me" className="link">
          Me
        </Link>
      </li>
    </ul>
  );
};

export default Auth;
