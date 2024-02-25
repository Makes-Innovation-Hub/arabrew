import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
const port = import.meta.env.VITE_SERVER_PORT;

const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
// const token = storedUser ? storedUser.token : null;
console.log(storedUser);

const getToken = () => {
  const tokenString = localStorage.getItem("token");

  if (tokenString) {
    // Parse the JSON string back to its original format (string)
    const token = JSON.parse(tokenString);
    return token; // Return the token string
  }
  return null; // Return null if the token isn't found // Example: Get the token from local storage
};

// console.log(token);
const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}:${port}/api`,
    tagTypes: ["Job"],
    prepareHeaders: (headers) => {
      // Call your function to get the authentication token
      // console.log(token);

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
    createJob: builder.mutation({
      query: (jobObj) => ({
        url: "/job",
        method: "POST",
        body: jobObj,
      }),
      invalidatesTags: ["Job"],
      transformResponse: (response, meta, arg) => {
        console.log(response);
        return response;
      },
    }),
    getAllJobs: builder.query({
      query: () => "/job",
      providesTags: ["Job"],
    }),
    getJobById: builder.query({
      query: (id) => `/job/${id}`,
      providesTags: ["Job"],
    }),
    getUserJobPosts: builder.query({
      query: () => "/job/my-job-posts",
      providesTags: ["Job"],
    }),
    deleteJob: builder.mutation({
      query: (jobId) => ({
        url: `/job/${jobId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job"],
    }),
    updateJob: builder.mutation({
      query: ({ jobId, ...jobUpdates }) => ({
        url: `/job/${jobId}`,
        method: "PATCH",
        body: jobUpdates,
      }),
      invalidatesTags: ["Job"],
    }),
    applyToJob: builder.mutation({
      query: ({ userId, resume, jobId }) => ({
        url: "/job/apply",
        method: "PATCH",
        body: { userId, resume, jobId },
      }),
      invalidatesTags: ["Job"],
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useGetUserJobPostsQuery,
  useDeleteJobMutation,
  useUpdateJobMutation,
  useApplyToJobMutation,
} = jobApi;
export default jobApi;
