import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connectedUser: {
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
  },
  selectedUserToChat: {
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
  },
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
      const specificUser = action.payload.isConnectedUser
        ? "connectedUser"
        : "selectedUserToChat";
      state[specificUser].name = action.payload.name;
      state[specificUser].avatar = action.payload.avatar;
      state[specificUser].subId = action.payload.subId;
      state[specificUser].lang = action.payload.userDetails.nativeLanguage;
      state[specificUser].interests = action.payload.userDetails.interests;
      state[specificUser].birthYear = action.payload.userDetails.yearOfBirth;
      state[specificUser].nationality = action.payload.userDetails.nationality;
      state[specificUser].location = action.payload.userDetails.address;
      state[specificUser].gender = action.payload.userDetails.gender;
      state[specificUser].occupation = action.payload.userDetails.occupation;
      state[specificUser].bio = action.payload.userDetails.bio;
      console.log("state", state);
    },
  },
});
export const { addDetail, addAllDetails } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
