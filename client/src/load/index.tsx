import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux/es/exports";

import { store } from "redux/store";
import Loading from "./Loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Loading />
  </Provider>
);
