import { configureStore } from "@reduxjs/toolkit";
import { userRegisterSlice } from "../features/userRegister/userRegisterSlice.jsx";
import { chatUserSlice } from "../features/chatUser/chatUserSlice.jsx";
import appLanguageSlice from "../features/appLanguage/appLanguageSlice.jsx";
import userDataApi from "../features/userDataApi";
import conversationApi from "../features/conversations/conversationApi.slice.js";
import meetupDataApi from "../features/meetupDataApi.js";
import jobApi from "../features/jobStore/jobAPI.js";
import { meetupApi } from "../features/meetupApi.js";
export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
    [meetupApi.reducerPath]: meetupApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    userRegister: userRegisterSlice.reducer,
    chatUser: chatUserSlice.reducer,
    language: appLanguageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userDataApi.middleware,
      conversationApi.middleware,
      meetupApi.middleware,
      jobApi.middleware,
    ]),
});
