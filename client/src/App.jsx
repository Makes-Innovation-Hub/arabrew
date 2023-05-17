import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root.jsx";
import Intro from "./pages/Intro";
import Occupation from "./pages/Occupation";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <div name="errorPage" />,
        children: [
          { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
        ],
      },
    ],
    <require to="/" />
  );
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
