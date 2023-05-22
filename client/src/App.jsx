import Intro from "./pages/Intro";
import LangSelection from "./pages/LangSelection";
import Interest from "./pages/Interest";
import Occupation from "./pages/Occupation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConversationPage from "./pages/ConversationPage"
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
  {path: "/conversation", element: < ConversationPage/>},
  

], <require to="/"/>);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
