import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Interests } from "./pages/exports.js";
import Intro from "./pages/Intro";
import SharedLayout from "./components/SharedLayout.jsx";
import Error from "./components/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Intro />} />
          <Route path="interests" element={<Interests />} />
        </Route>

        <Route path="*" element={<Error text="URL Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
