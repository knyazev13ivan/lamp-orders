import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface User {
  login: string;
  fullName: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  login: string;
  password: string;
}
export interface IAuth {
  data: null;
}

export interface IAuthParams {
  login: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getUser: build.query<any, any>({
      query: () => ({
        url: "auth/me",
      }),
    }),
    signIn: build.mutation<UserResponse, LoginRequest>({
      query: (params) => ({
        url: "auth/login",
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const { useSignInMutation, useGetUserQuery } = authApi;
