import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:5000' }), // Replace '/api' with your server's base URL
  endpoints: (builder) => ({
    sendUserData: builder.mutation({
      query: (userData) => ({
        url: '/user-data',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSendUserDataMutation } = api;

export const sendUserDataToServer = (userData) => {
  useSendUserDataMutation(userData);
};