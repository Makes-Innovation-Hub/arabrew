import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  suggestions: [],
  index: 0,
};
export const chatDataSlice = createSlice({
  name: "chatData",
  initialState,
  reducers: {
    addSuggestions: (state, { payload }) => {
      state.suggestions = payload.map((suggestion) => suggestion);
    },
    increaseIndex: (state) => {
      if (state.index === 4) {
        state.index = 0;
        return;
      }
      state.index += 1;
    },
  },
});
export const { addSuggestions, increaseIndex } = chatDataSlice.actions;
export default chatDataSlice.reducer;
