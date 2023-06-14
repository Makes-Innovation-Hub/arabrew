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

export const userRegisterSlice = createSlice({
  name: "userRegister",
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
    addAllDetailsConnectedUser: (state, action) => {
      state = action.payload;
    },
  },
});
export const { addDetail, addAllDetailsConnectedUser, addAuth0Details } =
  userRegisterSlice.actions;

export default userRegisterSlice.reducer;
