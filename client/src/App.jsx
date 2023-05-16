import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./pages/Intro";
import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
  { path: "/", element: <Intro/>, errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
