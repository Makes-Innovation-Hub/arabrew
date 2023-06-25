import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import { chatUserSlice } from "../features/chatUser/chatUserSlice.jsx";
import { chatDataSlice } from "../features/chatData/chatDataSlice.jsx";
import userDataApi from "../features/userDataApi";
export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    userRegister: userRegisterSlice.reducer,
    chatUser: chatUserSlice.reducer,
    chatData: chatDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});
