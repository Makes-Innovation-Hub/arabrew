import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../features/userDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
