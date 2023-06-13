import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "",
  name: "",
  avatar: "",
  userDetails: {
    nativeLanguage: "",
    interests: [],
    yearOfBirth: "",
    nationality: "",
    address: "",
    gender: "",
    occupation: "",
    bio: "",
  },
};

export const chatUserSlice = createSlice({
  name: "chatUser",
  initialState,
  reducers: {
    addDetail: (state, action) => {
      const { field, value } = action.payload;
      state.userDetails[field] = value;
    },
    addAllDetails: (state, action) => {
      state = action.payload;
    },
  },
});
export const { addDetail, addAllDetails } = chatUserSlice.actions;

export default chatUserSlice.reducer;
