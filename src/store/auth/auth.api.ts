import { baseApi } from "../base.api";

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

export interface RegisterRequest {
  login: string;
  password: string;
  fullName: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<UserResponse, string>({
      query: () => ({
        url: "/auth/me",
      }),
    }),
    signIn: build.mutation<UserResponse, LoginRequest>({
      query: (params) => ({
        url: "/auth/login",
        method: "POST",
        body: params,
      }),
    }),
    register: build.mutation<UserResponse, RegisterRequest>({
      query: (params) => ({
        url: "/auth/register",
        method: "POST",
        body: params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation, useGetUserQuery, useRegisterMutation } =
  authApi;
