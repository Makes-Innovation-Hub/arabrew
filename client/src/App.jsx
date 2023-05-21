import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Intro,Language, Interests, Occupation, } from "./pages/exports.js";
import RootLayout from "./components/sharedLayouts/RootLayout.jsx";
import RegisterLayout from "./components/sharedLayouts/RegisterLayout.jsx";
import HeaderLayout from "./components/HeaderLayout.jsx";
import Error from "./components/Error.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderLayout />,
      errorElement: <Error text="URL Error" />,
      children: [
        { path: "/", element: <Intro /> },

        {
          path: "register",
          element: <RegisterLayout />,
          children: [
            { path: "lang", element: <Language/>},
            { path: "interests", element: <Interests /> },
            { path: "occupation", element: <Occupation /> },
          ],
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
