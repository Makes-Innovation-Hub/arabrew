import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import { chatUserSlice } from "../features/chatUser/chatUserSlice.jsx";
import appLanguageSlice from "../features/appLanguage/appLanguageSlice.jsx";
import userDataApi from "../features/userDataApi";
import conversationApi from "../features/conversations/conversationApi.slice.js";
import meetupDataApi from "../features/meetupDataApi.js";
export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
    [meetupDataApi.reducerPath]: meetupDataApi.reducer,
    userRegister: userRegisterSlice.reducer,
    chatUser: chatUserSlice.reducer,
    language: appLanguageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userDataApi.middleware,
      conversationApi.middleware,
      meetupDataApi.middleware,
    ]),
});
