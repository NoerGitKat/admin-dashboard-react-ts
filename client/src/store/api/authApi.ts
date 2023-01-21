import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ENDPOINT }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (id) => `auth/user/${id}`,
      providesTags: (result) => (result ? ["User"] : []),
    }),
  }),
});

export const { useGetUserQuery } = authApi;

export default authApi;
