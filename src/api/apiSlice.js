import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gitlab.stud.idi.ntnu.no/api/v4",
    prepareHeaders(headers) {
      const token = "glpat-9P2csQz7hVezQsU3yj-g";
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => "/user",
    }),
  }),
});

export const { useGetUserDataQuery } = apiSlice;
