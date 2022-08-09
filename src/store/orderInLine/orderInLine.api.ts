import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface IOrderInLine {
  _id: string;
  name: string;
  number: number;
  priority: number;
  text: string;
}

export const orderInLineApi = createApi({
  reducerPath: "orderInLine/api",
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
  tagTypes: ['Order'],
  endpoints: (build) => ({
    getOrders: build.query<IOrderInLine[], string>({
      query: () => ({
        url: "orders-in-line",
      }),
      providesTags : result => ['Order']
    }),
    createOrder: build.mutation<IOrderInLine, IOrderInLine>({
      query: (order) => ({
        url: 'orders-in-line',
        method: 'POST',
        body: order
      }),
      invalidatesTags: ['Order']
    }),
    deleteOrder: build.mutation<IOrderInLine, string>({
      query: (id) => ({
        url: `orders-in-line/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order']
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation, useDeleteOrderMutation } = orderInLineApi;
