import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
  ConversationPage,
  Chat,
} from "./pages/exports.js";
import GenderSelection from "./pages/GenderSelection";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderLayout from "./components/HeaderLayout";
import Location from "./pages/Location";
import ConversationPage from "./pages/ConversationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    errorElement: <>Error...</>,
    children: [
      { path: "/lang", element: <LangSelection /> },
      { path: "/interests", element: <Interests /> },
      { path: "/gender", element: <GenderSelection /> },
      { path: "/occupation", element: <Occupation /> },
      { path: "/location", element: <Location /> },
    ],
  },
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
  { path: "/conversation", element: <ConversationPage /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
