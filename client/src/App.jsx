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
} from "./pages/exports.js";
import ProfilePage from "./pages/ProfilePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import prevConversation from "./pages/DemoArrChatsData";
import Test from "./pages/Test.jsx";

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
  {
    path: "/conversation",
    element: <ConversationPage prevConversation={prevConversation} />,
  },
  { path: "/test", element: <Test />, errorElement: <>Error...</> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
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
