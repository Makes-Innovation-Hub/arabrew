import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const userDataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["User"],
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userObj) => ({
        url: "user/register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: userObj,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response, meta, arg) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        sessionStorage.setItem("loggedUser", JSON.stringify(response.data));
        return response;
      },
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
    getWork: builder.query({
      query: () => ({
        url: "user/get-work-users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getChatByNames: builder.query({
      query: ([usersArr, userLang]) => {
        const [sender, reciever] = usersArr;
        return {
          url: `chat/${sender}/${reciever}?userLang=${userLang}`,
          method: "GET",
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (subId) => `/user/${subId}`,
      method: "GET",
    }),
    getUserChatsList: builder.query({
      query: (userName) => `/chat/logged/user/${userName}`,
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLazyGetUsersQuery,
  useGetChatByNamesQuery,
  useGetLoggedUserQuery,
  useGetUserChatsListQuery,
  useLazyGetLoggedUserQuery,
  useGetWorkQuery,
} = userDataApi;
export default userDataApi;
