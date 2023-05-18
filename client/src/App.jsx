import Intro from "./pages/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Interests, Occupation } from "./pages/exports.js";
import SharedLayout from "./components/SharedLayout.jsx";
import Error from "./components/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<h1>LANDING PAGE</h1>} />
          <Route path="interests" element={<Interests />} />
          <Route path="occupation" element={<Occupation />} />
  {/* { path: "/intro", element: <Intro />, errorElement: <>Error...</> }, */}

        </Route>

        <Route path="*" element={<Error text="URL Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
