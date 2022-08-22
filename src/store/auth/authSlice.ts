import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UserResponse } from "./auth.api";
import type { RootState } from "../store";

type AuthState = {
  user: User | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: window.localStorage.getItem("token") || null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      // { payload: { token, ...user } }: PayloadAction<{ user: User; token: string }>
      { payload: { token, ...user } }: PayloadAction<UserResponse>
    ) => {
      state.user = user;
      state.token = token;
      window.localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      window.localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
