import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import LudinhoRoutes from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <LudinhoRoutes />
  </Router>
);
