import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Occupation from "./pages/Occupation";

const router = createBrowserRouter([
  { path: "/occupation", element: <Occupation /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
