import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Occupation from "./pages/Occupation";

const router = createBrowserRouter([
  { path: "/", element: <Occupation />, errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
