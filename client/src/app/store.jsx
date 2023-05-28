import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import userDataApi from "../features/userDataApi";

export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    userRegister: userRegisterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});
