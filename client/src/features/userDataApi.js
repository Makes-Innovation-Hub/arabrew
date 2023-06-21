import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userDataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}:${
      import.meta.env.VITE_SERVER_PORT
    }/api`,
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
        const [sender, reciever] = names;
        return {
          url: `chat/${sender}/${reciever}`,
          method: "GET",
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (subId) => `/user/${subId}`,
      method: "GET",
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
