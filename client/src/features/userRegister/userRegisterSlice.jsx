import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "5892933",
  name: "Bonnie",
  avatar: "TEMP123",
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
