import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subId: "",
  name: "",
  email: "",
  avatar: "",
  userDetails: {
    nativeLanguage: "",
    interests: [],
    yearOfBirth: "",
    nationality: "",
    address: "",
    gender: "",
    occupation: "",
    workField: "",
    resume: "",
    bio: "",
  },
};
const storedUser = sessionStorage.getItem("loggedUser");
export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState: storedUser ? JSON.parse(storedUser) : initialState,
  reducers: {
    addDetail: function (state, { payload }) {
      const { field, value } = payload;
      state.userDetails[field] = value;
    },
    addAuth0Details: function (state, { payload }) {
      const { subId, name, avatar, email } = payload;
      state.subId = subId;
      state.name = name;
      state.email = email;
      state.avatar = avatar;
    },
    addAllDetailsConnectedUser: function (state, { payload }) {
      state = payload;
      return state;
    },
    mergeDetails: function (state, { payload }) {
      state = { ...state, ...payload };
    },
    cleanUser: function (state) {
      state = initialState;
    },
  },
});
export const {
  addDetail,
  addAllDetailsConnectedUser,
  addAuth0Details,
  mergeDetails,
  cleanUser,
} = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
