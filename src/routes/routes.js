import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function LudinhoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
