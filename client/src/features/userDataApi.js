import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//! this API slice is for all of our https Requests not just the userData...
const userDataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({
    sendUserData: builder.mutation({
      query: (userData) => ({
        url: "/api/user/user-data",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSendUserDataMutation } = userDataApi;

export default userDataApi;
