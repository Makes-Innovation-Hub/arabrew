import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
  ConversationPage,
  BirthPage,
  Chat,
  Nationality,
  BioPage,
  Location,
  GenderSelection,
  SearchFriends,
} from "./pages/exports.js";
import HeaderLayout from "./components/HeaderLayout";
import NationalityPage from "./pages/NationalityPage/NationalityPage.jsx";
import prevConversation from "./pages/DemoArrChatsData";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    errorElement: <>Error...</>,
    children: [
      { path: "/lang", element: <LangSelection /> },
      { path: "/interests", element: <Interests /> },
      { path: "/nationality", element: <Nationality /> },
      { path: "/location", element: <Location /> },
      { path: "/gender", element: <GenderSelection /> },
      { path: "/occupation", element: <Occupation /> },
    ],
  },
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  {
    path: "/conversation",
    element: <ConversationPage prevConversation={prevConversation} />,
  },
  {
    path: "/chat-page/:roomId",
    element: <Chat />,
    errorElement: <>Error...</>,
  },
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
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
