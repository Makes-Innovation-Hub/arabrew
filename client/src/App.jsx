import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root.jsx";
import Error from "./pages/Error.page.jsx";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
          { path: "/", element: <div/> },
          // { path: "/Read", element: <div/> },
          // { path: "/Update", element: <div/> },
          // { path: "/Delete", element: <div/> },
          // { path: "/*", element: <div/> },
        ],
      },
    ],
    <require to="/" />
  );
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;


