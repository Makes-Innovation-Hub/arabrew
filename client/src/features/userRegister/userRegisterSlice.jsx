import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "208231",
  name: "Garry",
  avatar: "TEMP",
  userDetails: {
    nativeLanguage: "",
    interests: [],
    yearOfBirth: "",
    nationality: "Israel",
    address: "",
    gender: "",
    occupation: "",
    bio: "hi",
  },
};

export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    addDetail: (state, action) => {
      const { field, value } = action.payload;
      state.userDetails[field] = value;
    },
  },
});
export const { addDetail } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
