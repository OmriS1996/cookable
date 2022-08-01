import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/layout/AppLayout";
import Recipes from "./pages/recipes/Recipes";
import Blank from "./pages/Blank";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/started" element={<Blank />} />
          <Route path="/calendar" element={<Blank />} />
          <Route path="/user" element={<User />} />
          <Route path="/recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
