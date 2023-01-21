import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types";

const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ENDPOINT }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => `store/products`,
      providesTags: (result) => (result ? ["Product"] : []),
    }),
  }),
});

export const { useGetProductsQuery } = storeApi;

export default storeApi;
