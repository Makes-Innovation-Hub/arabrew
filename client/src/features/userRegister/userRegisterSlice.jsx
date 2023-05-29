import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});
export const { addDetail } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
