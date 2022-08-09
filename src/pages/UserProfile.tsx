import React from "react";
import { useGetUserQuery } from "../store/auth/auth.api";

const UserProfile = () => {
  const { data: user, error, isLoading } = useGetUserQuery("");

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        {JSON.stringify(user, null, 2)}
      </div>
      {error && <div>Oh no, there was an error</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default UserProfile;
