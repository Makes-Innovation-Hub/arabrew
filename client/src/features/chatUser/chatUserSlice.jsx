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
    addDetail: (state, { payload }) => {
      const { field, value } = payload;
      state.userDetails[field] = value;
    },
    addAuth0Details: (state, { payload }) => {
      const { subId, name, avatar } = payload;
      state.subId = subId;
      state.name = name;
      state.avatar = avatar;
    },
    addAllDetailsChatUser: (state, { payload }) => {
      state = payload;
      console.log("chat user state", state);
    },
  },
});
export const { addDetail, addAllDetailsChatUser, addAuth0Details } =
  chatUserSlice.actions;
export default chatUserSlice.reducer;
