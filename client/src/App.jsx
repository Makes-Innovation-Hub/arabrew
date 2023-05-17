import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Interests, Occupation } from "./pages/exports.js";
import SharedLayout from "./components/SharedLayout.jsx";
import Error from "./components/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Intro />} />
          <Route path="interests" element={<Interests />} />
          <Route path="occupation" element={<Occupation />} />
        </Route>

        <Route path="*" element={<Error text="URL Error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
