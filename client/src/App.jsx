import Intro from "./pages/Intro";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Occupation from "./pages/Occupation";

const router = createBrowserRouter([
  { path: "/intro", element: <Intro/>, errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;