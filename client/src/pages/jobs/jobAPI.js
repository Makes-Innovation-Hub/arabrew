import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const jobApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["Job"],
  }),
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (jobObj) => ({
        url: "job/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jobObj,
      }),
    }),
  }),
});

export const { useCreateJobMutation } = jobApi;
export default jobApi;
