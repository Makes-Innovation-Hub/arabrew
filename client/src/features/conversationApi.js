import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const conversationApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${import.meta.env.VITE_SERVER_BASE_URL}/api`,
  }),

  endpoints: (builder) => ({
    getUserChatsList: builder.query({
      query: (userName) => `/chat/logged/user/${userName}`,
    }),
  }),
});

export const { useGetUserChatsListQuery } = conversationApi;

export default conversationApi;
