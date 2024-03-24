import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const conversationApi = createApi({
  reducerPath: "conversationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/chat/conversation/generateTopics`,
  }),
  endpoints: (builder) => ({
    generateConversationTopics: builder.mutation({
      query: ({ user1Data, user2Data }) => ({
        url: "/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { user1Data, user2Data },
      }),
    }),
  }),
});
export const { useGenerateConversationTopicsMutation } = conversationApi;
export default conversationApi;
