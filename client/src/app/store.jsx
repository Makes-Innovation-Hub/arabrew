import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import { chatUserSlice } from "../features/chatUser/chatUserSlice.jsx";
import { chatDataSlice } from "../features/chatData/chatDataSlice.jsx";
import appLanguageSlice from "../features/appLanguage/appLanguageSlice.jsx";
import userDataApi from "../features/userDataApi";
export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    userRegister: userRegisterSlice.reducer,
    chatUser: chatUserSlice.reducer,
    chatData: chatDataSlice.reducer,
    language: appLanguageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDataApi.middleware),
});
