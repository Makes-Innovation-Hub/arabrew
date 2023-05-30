import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userDataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5575/api" }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userObj) => ({
        url: "user/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: userObj,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userDataApi;

export default userDataApi;
