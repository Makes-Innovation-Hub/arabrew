import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "-11111",
  name: "Benny Solomon",
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

  connectedUser: {
    name: "",
    avatar: "",
    subId: "",
    lang: "",
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
export const { addDetail } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
