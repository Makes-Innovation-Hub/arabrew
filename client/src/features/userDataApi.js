import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//! this API slice is for all of our https Requests not just the userData...
const userDataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5575/api" }),
  endpoints: (builder) => ({
    sendUserData: builder.mutation({
      query: (userData) => ({
        url: "/user-data",
        method: "POST",
        body: userData,
      }),
    }),
  }),
  getChatByNames: builder.query({
    query: (namesArr) => ({
      url: `chat/${namesArr[0]}/${namesArr[1]}`,
      method: "GET",
    }),
  }),
});

export const { useSendUserDataMutation, useGetChatByNamesQuery } = userDataApi;

export default userDataApi;
