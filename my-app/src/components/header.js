import { useDispatch, useSelector } from "react-redux";
import Logo from "../asset/argentBankLogo.webp";
import "../styles/main.min.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice";
import { clearAccounts } from "../features/accountSlice";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userName = useSelector((state) => state.user.userName);

  const handleSignOut = () => {
    dispatch(logout());
    dispatch(clearAccounts());
    navigate("/signup");
  };

  return (
    <nav className="main-nav">
      <img
        className="main-nav-logo main-nav-logo-image"
        src={Logo}
        alt="Argent Bank Logo"
        onClick={() => navigate("/")}
      />
      <h1 className="sr-only">Argent Bank</h1>
      <div>
        {accessToken ? (
          <div className="container-buttons">
            <div
              className="user-name"
              onClick={() => navigate("/Account")}
            >
              <span className="fa-solid fa-circle-user logo"></span>
              <span>{userName}</span>
            </div>
            <button
              onClick={handleSignOut}
              className="style-button"
            >
              <span className="fa-solid fa-right-from-bracket" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <Link
            className="main-nav-item"
            to="/signUp"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
