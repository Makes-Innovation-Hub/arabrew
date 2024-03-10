import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const getToken = () => {
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const token = storedUser?.token;

  if (token) {
    return token;
  }
  return null;
};
const userDataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["User"],
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
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
    getWorkUsers: builder.query({
      query: () => `user/get-work-users`,
      method: "GET",
    }),
    getUserById: builder.query({
      query: (id) => `/user/get-by-id/${id}`,
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
  useGetUserByIdQuery,
  useLazyGetLoggedUserQuery,
  useGetWorkUsersQuery,
} = userDataApi;
export default userDataApi;
