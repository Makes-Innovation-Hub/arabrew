import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "200",
  name: "Benny",
  avatar: "TEMP",
  userDetails: {
    nativeLanguage: "",
    interests: [],
    yearOfBirth: "",
    nationality: "Israel",
    address: "",
    gender: "",
    occupation: "",
    bio: "",
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
