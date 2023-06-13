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
        body: userObj,
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
    getLoggedUser: builder.query({
      query: (subId) => `/user/${subId}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLazyGetUsersQuery,
  useGetChatByNamesQuery,
  useGetLoggedUserQuery,
} = userDataApi;

export default userDataApi;
