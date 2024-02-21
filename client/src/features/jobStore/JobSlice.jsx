import { createSlice } from "@reduxjs/toolkit";
import jobApi from "./jobAPI";

const initialState = {
  title: "",
  company: "",
  city: "",
  model: "",
  description: "",
  postedBy: "",
};

const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
// console.log(storedUser)

export const jobSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    addJobDetail: function (state, { payload }) {
      const { field, value } = payload;
      state[field] = value;
      if (storedUser) {
        state.postedBy = storedUser._id;
        // console.log(storedUser._id)
      }
    },
  },
});
// console.log(initialState)
export const { addJobDetail } = jobSlice.actions;

export default jobSlice.reducer;
