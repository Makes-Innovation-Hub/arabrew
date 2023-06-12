import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "123ssss4",
  name: "batman",
  avatar:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
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
      state.userDetails[field] = value;
    },
  },
});
export const { addDetail } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
