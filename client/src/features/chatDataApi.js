import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/api/new-chat`;
const getToken = () => {
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const token = storedUser.token;
  if (token) {
    return token;
  }
  return null;
};

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    tagTypes: ["chat"],
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createChat: builder.mutation({
      query: (chatData) => ({
        url: "/chat",
        method: "POST",
        body: chatData,
      }),
      invalidatesTags: ["chat"],
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    getChatById: builder.query({
      query: (chatId) => `/chat/${chatId}`,
      providesTags: ["chat"],
    }),
    getChatByUsersIds: builder.query({
      query: (chatInfo) =>
        `/chat/chat-by-users-ids/?sender=${chatInfo.sender}&receiver=${chatInfo.receiver}&hub=${chatInfo.hub}`,
      providesTags: ["chat"],
    }),
    getUserChatsList: builder.query({
      query: (hub) => `/chat/existing/?hub=${hub}`,
      providesTags: ["chat"],
    }),
    addMessage: builder.mutation({
      query: ({ chatId, content }) => ({
        url: `/chat/${chatId}`,
        method: "PATCH",
        body: { content },
      }),
      invalidatesTags: ["chat"],
    }),
    removeChat: builder.mutation({
      query: (chatId) => ({
        url: `/chat/${chatId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["chat"],
    }),
  }),
});

export const {
  useCreateChatMutation,
  useGetChatByIdQuery,
  useGetChatByUsersIdsQuery,
  useGetUserChatsListQuery,
  useAddMessageMutation,
  useRemoveChatMutation,
} = chatApi;
