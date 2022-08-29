import React from "react";
import { useGetUserQuery } from "../store/auth/auth.api";
import svgProfile from "../icons/profile.svg";
import "../styles/userProfile.scss";
import Loader from "./Loader";

const UserProfile: React.FC = () => {
  const { data: user, error, isLoading, isSuccess } = useGetUserQuery("");

  return (
    <div className="user-profile">
      <img src={svgProfile} alt="user profile icon" />
      
      {isLoading && <Loader />}
      {error && <div>Oh no, there was an error</div>}

      {isSuccess && (
        <div className="user-data">
          <span className="full-name">{user.fullName}</span>
          <span className="login">{user.login}</span>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
