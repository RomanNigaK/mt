import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux/es/exports";

import { store } from "redux/store";
import Load from "load/Loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

setTimeout(
  () =>
    root.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ),
  3000
);
