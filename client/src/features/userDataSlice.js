import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state[action] = action.payload;
    },
  },
});

export const { addUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
