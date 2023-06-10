import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userDataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userObj) => ({
        url: "user/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObj),
      }),
    }),
    getLoggedUser: builder.query({
      query: (subId) => `/user/${subId}`,
    }),
  }),
});

export const { useRegisterUserDataMutation, useGetLoggedUserQuery } =
  userDataApi;

export default userDataApi;
