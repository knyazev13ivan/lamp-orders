import { baseApi } from "../base.api";

export interface IOperations {
  locksmith: string[];
  painter: string[];
  millwright: string[];
}

export const operationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllOperations: build.query<IOperations, string>({
      query: () => ({
        url: `/operations`,
      }),
    }),
  }),
});

export const { useGetAllOperationsQuery } = operationsApi;
