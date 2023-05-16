import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API endpoint
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "localhost:5000" }),
  endpoints: (builder) => ({
    sendUserData: builder.mutation({
      query: (userData) => ({
        url: "/user-data",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSendUserDataMutation } = api;
