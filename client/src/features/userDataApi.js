import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    getUsers: builder.query({
      query: (userObj) => {
        const { subId, interests } = userObj;
        const url = interests ? `?interests=${interests}` : "";
        return {
          url: `user/${subId}/get-users${url}`,
          method: "GET",
        };
      },
    }),
    getChatByNames: builder.query({
      query: (names) => {
        const { user1, user2 } = names;
        return {
          url: `chat/${user1}/${user2}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useSendUserDataMutation,
  useGetUsersQuery,
  useGetChatByNamesQuery,
} = userDataApi;

export default userDataApi;
