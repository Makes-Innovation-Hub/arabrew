import Intro from "./pages/Intro";
import Chat from "./pages/Chat/Chat";
import LangSelection from "./pages/LangSelection";
import Interests from "./pages/Interests";
import Occupation from "./pages/Occupation";
import BioPage from "./pages/BioPage/BioPage";

import HeaderLayout from "./components/HeaderLayout";
import BirthPage from "./pages/BirthPage/BirthPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderLayout } from "./components"
import {Intro, LangSelection, Interests, Nationality, Location, GenderSelection, Occupation } from "./pages"
import Chat from "./pages/Chat/Chat";
import ConversationPage from "./pages/ConversationPage";


const router = createBrowserRouter([
  {path: "/",
   element: <HeaderLayout/>,
   errorElement: <>Error...</>,
   children: [
      { path: "/lang", element: <LangSelection/>},
      { path: "/interests", element: <Interests/>},
      { path: "/nationality", element: <Nationality/>},
      { path: "/location", element: <Location/>},
      { path: "/gender", element: <GenderSelection/>},
      { path: "/occupation", element: <Occupation/>},
     ]},
  { path: "/intro", element: <Intro/>, errorElement: <>Error...</> },
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
  { path: "/conversation", element: <ConversationPage /> },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
