import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const getToken = () => {
  const tokenString = localStorage.getItem("token");

  if (tokenString) {
    // Parse the JSON string back to its original format (string)
    const token = JSON.parse(tokenString);
    return token; // Return the token string
  }
  return null; // Return null if the token isn't found // Example: Get the token from local storage
};
const baseUrl = "http://localhost:5001/api";

export const meetupApi = createApi({
  reducerPath: "meetupApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    tagTypes: ["Meetup"],
    prepareHeaders: (headers) => {
      // Call your function to get the authentication token
      const token = getToken();
      console.log(token);
      // If the token exists, set the Authorization header
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    createMeetup: builder.mutation({
      query: (meetupData) => ({
        url: "/meetup",
        method: "POST",
        body: meetupData,
      }),
      invalidatesTags: ["Meetup"],
      transformResponse: (response) => {
        console.log("response from rtk", response);
      },
      transformErrorResponse: (response) => {
        console.log("response from rtk", response);
      },
    }),
    getAllMeetups: builder.query({
      query: () => "/meetup",
      providesTags: ["Meetup"],
    }),
    updateMeetup: builder.mutation({
      query: ({ meetupId, meetupData }) => ({
        url: `/meetup/${meetupId}`,
        method: "PUT",
        body: meetupData,
      }),
      invalidatesTags: ["Meetup"],
    }),
    getMeetupById: builder.query({
      query: (meetupId) => `/meetup/${meetupId}`,
    }),
  }),
});

export const {
  useCreateMeetupMutation,
  useGetAllMeetupsQuery,
  useUpdateMeetupMutation,
  useGetMeetupByIdQuery,
} = meetupApi;
