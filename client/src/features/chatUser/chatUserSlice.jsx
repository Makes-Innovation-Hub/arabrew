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
    addAuth0Details: (state, action) => {
      const { subId, name, avatar } = action.payload;
      state.subId = subId;
      state.name = name;
      state.avatar = avatar;
    },
    addAllDetailsChatUser: (state, action) => {
      state = action.payload;
    },
  },
});
export const { addDetail, addAllDetailsChatUser, addAuth0Details } =
  chatUserSlice.actions;

export default chatUserSlice.reducer;
