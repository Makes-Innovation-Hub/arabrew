import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderLayout } from "./components"
import {Intro, LangSelection, Interests, Nationality, Location, GenderSelection, Occupation } from "./pages"

const router = createBrowserRouter([
  {path: "/",
   element: <HeaderLayout/>,
   errorElement: <>Error...</>,
   children: [
      { path: "/lang", element: <LangSelection/>},
      { path: "/interests", element: <Interests/>},
      { path: "/nationality", element: <Nationality/>},
      { path: "/location", element: <Location/>},
      { path: "/gender", element: <GenderSelection/>},
      { path: "/occupation", element: <Occupation/>},
     ]},
  {path: "/intro", element: <Intro/>, errorElement: <>Error...</>},
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
