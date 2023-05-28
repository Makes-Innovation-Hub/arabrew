import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
  ConversationPage,
  BirthPage,
  Chat,
  Nationality,
} from "./pages/exports.js";
import GenderSelection from "./pages/GenderSelection";
import BioPage from "./pages/BioPage/BioPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderLayout from "./components/HeaderLayout";
import BirthPage from "./pages/BirthPage/BirthPage";
import NationalityPage from "./pages/NationalityPage/NationalityPage";
import ConversationPage from "./pages/ConversationPage";

import Location from "./pages/Location";

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
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
  { path: "/conversation", element: <ConversationPage /> },
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
