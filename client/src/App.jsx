import Intro from "./pages/Intro";
import LangSelection from "./pages/LangSelection";
import Interest from "./pages/Interest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";

const router = createBrowserRouter([
  {path: "/",
   element: <HeaderLayout/>,
   errorElement: <>Error...</>,
   children: [
      { path: "/lang", element: <LangSelection/>},
      { path: "/interests", element: <Interest/>},
     ]},
  {path: "/intro", element: <Intro/>, errorElement: <>Error...</>},
  

], <require to="/"/>);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;