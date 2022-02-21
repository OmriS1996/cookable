import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/layout/AppLayout";
import Blank from "./pages/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/started" element={<Blank />} />
          <Route path="/calendar" element={<Blank />} />
          <Route path="/user" element={<Blank />} />
          <Route path="/recipes" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
