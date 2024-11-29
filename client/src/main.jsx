import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
