import { createSlice } from "@reduxjs/toolkit";

const appLanguageSLice = createSlice({
  name: "language",
  initialState: {
    selectedLanguage: "English (US)",
  },
  reducers: {
    setLanguage: function (state, action) {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = appLanguageSLice.actions;
export default appLanguageSLice.reducer;
