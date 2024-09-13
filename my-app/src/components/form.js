// src/components/Form.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/fetch.action";
import "../styles/main.css";

export function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector((state) => state.post.accessToken);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted with:", { username, password, rememberMe });

    dispatch(login(username, password));
  };

  useEffect(() => {
    if (accessToken) {
      navigate("/compte");
    }
  }, [accessToken, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <span
          className="fa fa-user-circle sign-in-icon"
          aria-hidden="true"
        ></span>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="submit"
            className="sign-in-button"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
