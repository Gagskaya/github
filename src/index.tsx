import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { initStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = initStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
