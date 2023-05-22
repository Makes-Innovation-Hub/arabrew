import Intro from "./pages/Intro";
import Chat from "./pages/Chat/Chat";
import LangSelection from "./pages/LangSelection";
import Interest from "./pages/Interest";
import Occupation from "./pages/Occupation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BioPage from "./pages/BioPage/BioPage";

import HeaderLayout from "./components/HeaderLayout";
import BirthPage from "./pages/BirthPage/BirthPage";
const router = createBrowserRouter(
  [
    { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
    { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
    { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },

    {
      path: "/",
      element: <HeaderLayout />,
      errorElement: <>Error...</>,
      children: [
        { path: "/lang", element: <LangSelection /> },
        { path: "/interests", element: <Interest /> },
      ],
    },
    { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  ],
  <require to="/" />
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
