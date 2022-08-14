import { baseApi } from "../base.api";
import { IOrderInLine } from "../orderInLine/orderInLine.api";

export interface IOperation {
  name: string;
  isDone: boolean;
}

export interface IOrderInProgress {
  _id: string;
  order: IOrderInLine;
  locksmith: IOperation[];
  painter: IOperation[];
  millwright: IOperation[];
  isPause: boolean;
}

export const orderInProgressApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrdersInProgress: build.query<IOrderInProgress[], string>({
      query: () => ({
        url: "/orders-in-progress",
      }),
      providesTags: (result) => ["OrderInProgress"],
    }),
    createOrderInProgress: build.mutation<IOrderInProgress, { id: string }>({
      query: (order) => ({
        url: "/orders-in-progress",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["OrderInProgress"],
    }),
    toogleIsDone: build.mutation<
      IOrderInProgress,
      { id: string; step: string; operations: IOperation[] }
    >({
      query: (order) => ({
        url: "/orders-in-progress",
        method: "PUT",
        body: order,
      }),
      invalidatesTags: ["OrderInProgress"],
    }),
    deleteOrderInProgress: build.mutation<IOrderInProgress, string>({
      query: (id) => ({
        url: `/orders-in-progress/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OrderInProgress"],
    }),
  }),
});

export const {
  useGetOrdersInProgressQuery,
  useCreateOrderInProgressMutation,
  useDeleteOrderInProgressMutation,
  useToogleIsDoneMutation,
} = orderInProgressApi;
