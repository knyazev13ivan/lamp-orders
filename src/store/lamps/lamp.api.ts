import { baseApi } from "../base.api";

export interface ILamp {
  name: string;
  locksmith: string[];
  painter: string[];
  millwright: string[];
}

export const lampApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLamp: build.query<ILamp, string>({
      query: (name) => ({
        url: `/lamps/${name}`,
      }),
    }),
    createLamp: build.mutation<ILamp, ILamp>({
      query: (lamp) => ({
        url: "/lamps",
        method: "POST",
        body: lamp,
      }),
    }),
  }),
});

export const { useGetLampQuery, useCreateLampMutation } = lampApi;
