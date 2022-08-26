import { baseApi } from "../base.api";

export interface IOrderInHistory {
  _id: string;
  name: string;
  number: number;
  text: string;
  createdAt: string;
}

export const orderInHistoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrdersInHistory: build.query<IOrderInHistory[], string>({
      query: () => ({
        url: "/orders-in-history",
      }),
      providesTags: (result) => ["OrderInHistory"],
    }),
    createOrderInHistory: build.mutation<IOrderInHistory, { id: string }>({
      query: (order) => ({
        url: "/orders-in-history",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["OrderInHistory"],
    }),
    deleteOrderInHistory: build.mutation<IOrderInHistory, string>({
      query: (id) => ({
        url: `/orders-in-history/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OrderInHistory"],
    }),
  }),
});

export const {
  useGetOrdersInHistoryQuery,
  useCreateOrderInHistoryMutation,
  useDeleteOrderInHistoryMutation,
} = orderInHistoryApi;
