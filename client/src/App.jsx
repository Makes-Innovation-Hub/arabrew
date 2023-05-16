import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root.jsx";
function App() {
  const router = createBrowserRouter(
    [{
        path: "/",
        element: <RootLayout />,
        errorElement: <div name="errorPage"/>,
        children: [
          { path: "/", element: <div/> },
        ],},],
    <require to="/" />
  );
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;