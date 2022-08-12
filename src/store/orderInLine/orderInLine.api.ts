import { baseApi } from "../base.api";

export interface IOrderInLine {
  _id: string;
  name: string;
  number: number;
  priority: number;
  text: string;
}

export const orderInLineApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrdersInLine: build.query<IOrderInLine[], string>({
      query: () => ({
        url: "/orders-in-line",
      }),
      providesTags: (result) => ["OrderInLine"],
    }),
    createOrderInLine: build.mutation<IOrderInLine, IOrderInLine>({
      query: (order) => ({
        url: "/orders-in-line",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["OrderInLine"],
    }),
    deleteOrderInLine: build.mutation<IOrderInLine, string>({
      query: (id) => ({
        url: `/orders-in-line/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OrderInLine"],
    }),
  }),
});

export const {
  useGetOrdersInLineQuery,
  useCreateOrderInLineMutation,
  useDeleteOrderInLineMutation,
} = orderInLineApi;
