import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const meetupDataApi = createApi({
  reducerPath: "meetupDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api`,
    tagTypes: ["Meetup"],
  }),
  endpoints: (builder) => ({
    getAllMeetups: builder.query({
      query: () => "/meetup",
      providesTags: ["Meetup"],
    }),
  }),
});

export const { useGetAllMeetupsQuery } = meetupDataApi;
export default meetupDataApi;
