import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//! this API slice is for all of our https Requests not just the userData...
const userDataApi = createApi({
  reducerPath: "userDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5090/api" }),
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    sendUserData: builder.mutation({
      query: (userData) => ({
        url: "/user/user-data",
        method: "POST",
        body: JSON.stringify(userData),
      }),
    }),
    getLoggedUser: builder.query({
      query: (subId) => `/user/${subId}`,
    }),
  }),
});

export const { useSendUserDataMutation, useGetLoggedUserQuery } = userDataApi;

export default userDataApi;
