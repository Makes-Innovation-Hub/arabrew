import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
export const store = configureStore({
  reducer: {
    userRegister: userRegisterSlice.reducer,
  },
});
