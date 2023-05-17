import Intro from "./pages/Intro";
import LangSelection from "./pages/LangSelection";
import RootLayout from "./components/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path: "/",
   element: <RootLayout/>,
   errorElement: <>Error...</>,
   children: [
      { path: "/lang", element: <LangSelection/>},
     ]},
  {path: "/intro", element: <Intro/>, errorElement: <>Error...</>
    }

], <require to="/"/>);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;