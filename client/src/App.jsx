import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Intro, Interests, Occupation } from "./pages/exports.js";
import RootLayout from "./components/sharedLayouts/RootLayout.jsx";
import RegisterLayout from "./components/sharedLayouts/RegisterLayout.jsx";
import Error from "./components/Error.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error text="URL Error" />,
      children: [
        { path: "/", element: <Intro /> },
        {
          path: "register",
          element: <RegisterLayout />,
          children: [
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
// (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={}>
//           <Route index element={<Intro />} />
//           <Route path="interests" element={<Interests />} />
//           <Route path="occupation" element={<Occupation />} />

//         </Route>

//         <Route path="*" element={<Error text="URL Error" />} />
//       </Routes>
//     </BrowserRouter>
//   );
