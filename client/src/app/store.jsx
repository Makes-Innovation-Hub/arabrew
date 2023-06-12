import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import userDataApi from "../features/userDataApi";
import { userStatusSlice } from "../features/userStatus/userStatusSlice.jsx";

export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    userRegister: userRegisterSlice.reducer,
    userStatus: userStatusSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});
