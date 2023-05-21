import {
  Intro,
  LangSelection,
  Interests,
  Occupation,
} from "./pages/exports.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderLayout from "./components/HeaderLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HeaderLayout />,
      errorElement: <>Error...</>,
      children: [
        { path: "lang", element: <LangSelection /> },
        { path: "interests", element: <Interests /> },
        { path: "occupation", element: <Occupation /> },
      ],
    },
    { path: "/intro", element: <Intro />, errorElement: <>Error...</> },
  ],
  <require to="/" />
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
