import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
  ConversationPage,
  BirthPage,
  Chat,
  NationalityPage,
  BioPage,
  Location,
  GenderSelection,
  SearchFriends,
} from "./pages/exports.js";
import ProfilePage from "./pages/ProfilePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import prevConversation from "./pages/DemoArrChatsData";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetLoggedUserQuery } from "./features/userDataApi.js";
import { skipToken } from "@reduxjs/toolkit/dist/query/index.js";
import { addAuth0Details } from "./features/userRegister/userRegisterSlice.jsx";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const { data: loggedUser, isSuccess } = useGetLoggedUserQuery(
    user ? user.sub : skipToken
  );

  useEffect(() => {
    console.log(`auth: ${isAuthenticated}`);
    if (!isLoading && !isAuthenticated) {
      console.log("Redirecting to Auth0...");
      loginWithRedirect();
    }
    if (!isLoading && user && isSuccess) {
      if (loggedUser?.success) {
        navigate("/conversation");
      } else {
        const { name, picture, sub } = user;
        dispatch(
          addAuth0Details({
            name: name,
            avatar: picture,
            subId: sub.split("|")[1],
          })
        );
        navigate("/lang");
      }
    }
  }, [
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    isSuccess,
    loggedUser,
  ]);

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log out
    </button>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    errorElement: <>Error...</>,
    children: [
      { path: "/lang", element: <LangSelection /> },
      { path: "/interests", element: <Interests /> },
      { path: "/location", element: <Location /> },
      { path: "/gender", element: <GenderSelection /> },
      { path: "/occupation", element: <Occupation /> },
    ],
  },
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  { path: "/home", element: <AuthWrapper />, errorElement: <>Error...</> },
  {
    path: "/conversation",
    element: <ConversationPage prevConversation={prevConversation} />,
  },
  {
    path: "/chat-page/:sender/:reciever",
    element: <Chat />,
    errorElement: <>Error...</>,
  },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
  {
    path: "/search-friends",
    element: <SearchFriends />,
    errorElement: <>Error...</>,
  },
  {
    path: "/nationalityPage",
    element: <NationalityPage />,
    errorElement: <>Error...</>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <AuthWrapper />
    </RouterProvider>
  );
}
export default App;
