import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  company: "",
  city: "",
  model: "",
  description: "",
  postedBy: "",
};
const storedUser = sessionStorage.getItem("loggedUser");
export const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    addJobDetail: function (state, { payload }) {
      const { field, value } = payload;
      state[field] = value;
      state.postedBy = storedUser._id;
    },
  },
});
