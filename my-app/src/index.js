import React, { getReducer } from "react";
import ReactDOM from "react-dom/client";
import { Footer, Header, CompteHeader } from "./components/index";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/reducers/index";
import { SignUp, Home, Compte } from "../src/pages/";
import { getUser, updateUser } from "./actions/get.action";

const store = configureStore({
  reducer: rootReducer,
  user: getReducer,
  devTools: true,
});

store.dispatch(getUser());
store.dispatch(updateUser());

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/compte" ? <CompteHeader /> : <Header />}
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
          path="/compte"
          element={<Compte />}
        />
      </Routes>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
