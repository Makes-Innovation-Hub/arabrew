import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "1850231",
  name: "Garry",
  avatar: "TEMP",
  userDetails: {
    nativeLanguage: "HE",
    interests: ["Photography", "Hiking", "instruments", "Yoga", "Chess"],
    yearOfBirth: "1999",
    nationality: "Israel",
    address: "London",
    gender: "Male",
    occupation: "Doctor",
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
