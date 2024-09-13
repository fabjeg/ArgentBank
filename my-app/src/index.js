import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, Header } from "./components/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp, Home } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
