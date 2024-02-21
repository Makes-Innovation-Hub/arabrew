import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5001/api";

export const meetupApi = createApi({
  reducerPath: "meetupApi",
  baseQuery: fetchBaseQuery({ baseUrl, tagTypes: ["Meetup"] }),
  endpoints: (builder) => ({
    createMeetup: builder.mutation({
      query: (meetupData) => ({
        url: "/meetup",
        method: "POST",
        body: meetupData,
      }),
      invalidatesTags: ["Meetup"],
      transformResponse: (response) => {
        return response;
      },
    }),
    getAllMeetups: builder.query({
      query: () => "/meetup",
      providesTags: ["Meetup"],
    }),
  }),
});

export const { useCreateMeetupMutation, useGetAllMeetupsQuery } = meetupApi;
