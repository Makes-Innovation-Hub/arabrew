import Intro from "./pages/Intro";
import Chat from "./pages/Chat/Chat";
import LangSelection from "./pages/LangSelection";
import Interests from "./pages/Interests";
import GenderSelection from "./pages/GenderSelection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import Location from "./pages/Location";
import Occupation from "./pages/Occupation";
import ConversationPage from "./pages/ConversationPage";
import BioPage from "./pages/BioPage/BioPage";
import BirthPage from "./pages/BirthPage/BirthPage";

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
  {
    path: "/conversation",
    element: <ConversationPage />,
    errorElement: <>Error...</>,
  },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
