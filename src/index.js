import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";

import LudinhoRoutes from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <LudinhoRoutes />
  </HashRouter>
);
