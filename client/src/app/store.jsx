import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import { chatUserSlice } from "../features/chatUser/chatUserSlice.jsx";
import userDataApi from "../features/userDataApi";
export const store = configureStore({
  reducer: {
    userRegister: userRegisterSlice.reducer,
    chatUser: chatUserSlice.reducer,
    [userDataApi.reducerPath]: userDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});
