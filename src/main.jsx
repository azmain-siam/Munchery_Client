import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import StoreContextProivder from "./contexts/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContextProivder>
    <RouterProvider router={router} />
  </StoreContextProivder>
);
