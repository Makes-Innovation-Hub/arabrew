import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  // console.log("storedUser: ", storedUser);
  const token = storedUser.token;
  if (token) {
    return token; // Return the token string
  }
  return null; // Return null if the token isn't found // Example: Get the token from session storage
};

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

export const meetupApi = createApi({
  reducerPath: "meetupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["Meetup"],
    prepareHeaders: (headers) => {
      const token = getToken();
      // console.log(token);
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
        return response;
      },
    }),
    getAllMeetups: builder.query({
      query: () => "/meetup",
      providesTags: ["Meetup"],
    }),
    getMyMeetups: builder.query({
      query: () => "/meetup/my-meetups",
      providesTags: ["Meetup"],
    }),
    updateMeetup: builder.mutation({
      query: ({ meetupId, meetupData }) => ({
        url: `/meetup/${meetupId}`,
        method: "PATCH",
        body: meetupData,
      }),
      invalidatesTags: ["Meetup"],
    }),

    getMyMeetups: builder.query({
      query: () => "/meetup/my-meetups",
      providesTags: ["Meetup"],
    }),

    getMeetupById: builder.query({
      query: (meetupId) => `/meetup/${meetupId}`,
      providesTags: ["Meetup"],
    }),
    attendMeetup: builder.mutation({
      query: ({ meetupId, isAttending }) => ({
        url: `/meetup/${meetupId}/attend`,
        method: "PATCH",
        body: { isAttending },
      }),
      invalidatesTags: ["Meetup"],
    }),
    cancelAttendMeetup: builder.mutation({
      query: ({ meetupId }) => ({
        url: `/meetup/${meetupId}/attend`,
        method: "DELETE",
      }),
      invalidatesTags: ["Meetup"],
    }),
  }),
});

export const {
  useCreateMeetupMutation,
  useGetAllMeetupsQuery,
  useUpdateMeetupMutation,
  useGetMeetupByIdQuery,
  useAttendMeetupMutation,
  useCancelAttendMeetupMutation,
  useGetMyMeetupsQuery,
} = meetupApi;
