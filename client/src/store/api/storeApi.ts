import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types";

const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ENDPOINT }),
  tagTypes: ["Product", "Customer"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => `store/products`,
      providesTags: (result) => (result ? ["Product"] : []),
    }),
    getCustomers: builder.query<any, null>({
      query: () => `store/customers`,
      providesTags: (result) => (result ? ["Customer"] : []),
    }),
  }),
});

export const { useGetProductsQuery, useGetCustomersQuery } = storeApi;

export default storeApi;
