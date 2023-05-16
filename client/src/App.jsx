import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root.jsx";
import Error from "./pages/Error.page.jsx";
import "./App.css";
import PageOne from "./pages/PageOne.page.jsx";
import PageTwo from "./pages/PageTwo.page.jsx";
function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
          { path: "/", element: <PageOne/> },
          { path: "/Two", element: <PageTwo/> },
        
        ],
      },
    ],
    <require to="/" />
  );
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;


