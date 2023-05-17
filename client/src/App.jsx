import Intro from "./pages/Intro";
import Chat from "./pages/Chat/Chat";
// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Occupation from "./pages/Occupation";

const router = createBrowserRouter([
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  { path: "/chatPage", element: <Chat />, errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
