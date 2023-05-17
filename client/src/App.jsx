import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Occupation from "./pages/Occupation";
import Bio from "./pages/Bio";

const router = createBrowserRouter([
  { path: "/occupation", element: <Occupation /> },
  { path: "/bio", element: <Bio /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
