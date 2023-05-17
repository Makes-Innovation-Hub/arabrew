import Intro from "./pages/Intro";
import Chat from "./pages/Chat/Chat";
import "./App.css";
import BirthPage from "./pages/BirthPage/BirthPage";
import Occupation from "./pages/Occupation";
import BioPage from "./pages/BioPage/BioPage";
// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
  { path: "/bioPage", element: <BioPage />, errorElement: <>Error...</> },
  { path: "/agePage", element: <BirthPage />, errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
