import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intro from "./pages/Intro";
import Chat from "./pages/Chat/Chat";
import "./App.css";
import PageLayout from "./components/PageLayout/PageLayout";
import BirthPage from "./pages/BirthPage/BirthPage";

const router = createBrowserRouter([
  { path: "/", element: <Intro />, errorElement: <>Error...</> },
  { path: "/chatPage", element: <Chat /> },
  { path: "/generalLayout", element: <PageLayout /> },
  { path: "/addAge", element: <BirthPage /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
