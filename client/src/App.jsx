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
  CommonInterests,
  ParentComponent,
} from "./pages/exports.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import prevConversation from "./pages/DemoArrChatsData";
const router = createBrowserRouter(
  [
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
        { path: "/commoninterests", element: <ParentComponent /> },
      ],
    },
    { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
    {
      path: "/conversation",
      element: <ConversationPage prevConversation={prevConversation} />,
    },
    { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
    { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
    { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
  ],
  <require to="/" />
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
