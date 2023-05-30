import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  avatar: "",
  subId: "",
  lang: "",
  interests: [],
  birthYear: "",
  nationality: "",
  location: "",
  gender: "",
  occupation: "",
  bio: "",
};

export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    addDetail: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    addAllDetails: (state, action) => {
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
      state.subId = action.payload.subId;
      state.lang = action.payload.userDetails.nativeLanguage;
      state.interests = action.payload.userDetails.interests;
      state.birthYear = action.payload.userDetails.yearOfBirth;
      state.nationality = action.payload.userDetails.nationality;
      state.location = action.payload.userDetails.address;
      state.gender = action.payload.userDetails.gender;
      state.occupation = action.payload.userDetails.occupation;
      state.bio = action.payload.userDetails.bio;
    },
  },
});
export const { addDetail, addAllDetails } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
