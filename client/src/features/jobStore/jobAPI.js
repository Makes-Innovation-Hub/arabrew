import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
const token = storedUser ? storedUser.token : null;

console.log(token);
const jobApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["Job"],
    prepareHeaders: (headers) => {
      // Call your function to get the authentication token
      // const token = getToken();
      // console.log(token);
      // If the token exists, set the Authorization header
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (jobObj) => ({
        url: "/job",
        method: "POST",
        body: jobObj,
      }),
      invalidatesTags: ["Job"],
      transformResponse: (response, meta, arg) => {
        // console.log(response);
        return response;
      },
    }),
  }),
});

export const { useCreateJobMutation } = jobApi;
// export default jobApi;
