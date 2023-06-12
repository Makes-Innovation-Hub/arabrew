import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  hasOnBoarded: false,
};

export const userStatusSlice = createSlice({
  name: "status",
  initialState,
  reducer: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setOnBoarded: (state, action) => {
      state.hasOnBoarded = action.payload;
    },
  },
});

export const { setAuthenticated, setOnBoarded } = userStatusSlice.actions;

export default userStatusSlice.reducer;
