import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderLayout } from "./components"
import {Intro, LangSelection, Interests, Age, Nationality, Location, GenderSelection, Occupation, Bio } from "./pages"

const router = createBrowserRouter([
  {path: "/",
   element: <HeaderLayout/>,
   errorElement: <>Error...</>,
   children: [
      { path: "/lang", element: <LangSelection />},
      { path: "/interests", element: <Interests />},
      { path: "/age", element: <Age />},
      { path: "/nationality", element: <Nationality />},
      { path: "/location", element: <Location />},
      { path: "/gender", element: <GenderSelection />},
      { path: "/occupation", element: <Occupation />},
      { path: "/bio", element: <Bio />}
     ]},
  {path: "/intro", element: <Intro />, errorElement: <>Error...</>},
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
