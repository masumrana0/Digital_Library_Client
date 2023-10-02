import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import sotre from "./redux/store";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={sotre}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
