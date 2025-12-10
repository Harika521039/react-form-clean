import { Routes, Route } from "react-router-dom";
import FormPage from "./FormPage.jsx";
import DetailsPage from "./DetailsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
