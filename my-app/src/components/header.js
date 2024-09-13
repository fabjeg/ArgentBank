import { useDispatch, useSelector } from "react-redux";
import Logo from "../img/argentBankLogo.png";
import "../styles/main.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/fetch.action";

export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.post.accessToken);
  const userName = useSelector((state) => state.post.user?.name);

  const handleClick = () => {
    navigate("/");
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/signup");
  };

  return (
    <nav className="main-nav">
      <img
        className=" main-nav-logo main-nav-logo-image"
        src={Logo}
        alt="Argent Bank Logo"
        onClick={handleClick}
      />
      <h1 className="sr-only">Argent Bank</h1>
      <div>
        {accessToken ? (
          <button
            onClick={handleSignOut}
            className="style-button"
          >
            <span>{userName}</span>
            <span className="fa-solid fa-gear" />
            <span className="fa-solid fa-power-off" />
          </button>
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
