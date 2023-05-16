import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", errorElement: <>Error...</> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
