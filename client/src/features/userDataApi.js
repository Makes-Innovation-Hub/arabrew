import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const userDataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
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
          url: `/user/${subId}/get-users${url}`,
          method: "GET",
        };
      },
    }),
    getChatByNames: builder.query({
      query: ([usersArr, userLang]) => {
        const [sender, reciever] = usersArr;
        return {
          url: `/chat/${sender}/${reciever}?userLang=${userLang}`,
          method: "GET",
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (subId) => `/user/${subId}`,
      method: "GET",
    }),
    getTopics: builder.query({
      query: ({ user1_name, user2_name }) =>
        `/user/generate-topics/${user1_name}/${user2_name}`,
      method: "GET",
    }),
    getChatHistory: builder.query({
      query: ({ user1_name, user2_name }) =>
        `/chat/${user1_name}/${user2_name}`,
      method: "GET",
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLazyGetUsersQuery,
  useGetChatByNamesQuery,
  useGetLoggedUserQuery,
  useGetTopicsQuery,
  useLazyGetLoggedUserQuery,
  useGetChatHistoryQuery,
} = userDataApi;
export default userDataApi;
