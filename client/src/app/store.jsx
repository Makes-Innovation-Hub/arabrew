import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../features/userDataSlice";
import userDataApi from "../features/userDataApi";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    [userDataApi.reducerPath]: userDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});
