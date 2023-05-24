import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
  ConversationPage
} from "./pages/exports.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConversationPage from "./pages/ConversationPage";
import HeaderLayout from "./components/HeaderLayout";
const router = createBrowserRouter(
  [
    { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
    { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
    {
      path: "/",
      element: <HeaderLayout />,
      errorElement: <>Error...</>,
      children: [
        { path: "/lang", element: <LangSelection /> },
        { path: "/interests", element: <Interest /> },
        { path: "occupation", element: <Occupation /> }
      ],
    },
    { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
    { path: "/conversation", element: <ConversationPage /> },
  ],
  <require to="/" />
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
