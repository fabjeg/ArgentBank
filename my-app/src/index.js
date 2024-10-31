import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, Header } from "./components/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { SignUp, Home, Account } from "../src/pages/";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/signup"
              element={<SignUp />}
            />
            <Route
              path="/Account"
              element={<Account />}
            />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
