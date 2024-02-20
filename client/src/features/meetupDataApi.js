import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const meetupDataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["Meetup"],
  }),
  endpoints: (builder) => ({
    getAllMeetups: builder.query({
      query: () => "/meetup",
    }),
  }),
});

export const { useGetAllMeetupsQuery } = meetupDataApi;
export default meetupDataApi;
