import Intro from "./pages/Intro";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Occupation from "./pages/Occupation";
import Bio from "./pages/Bio";

const router = createBrowserRouter([
  { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  { path: "/bio", element: <Bio /> },
  { path: "/occupation", element: <Occupation /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
