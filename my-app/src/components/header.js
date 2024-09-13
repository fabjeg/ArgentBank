import Logo from "../img/argentBankLogo.png";
import "../styles/main.css";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
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
        <Link
          className="main-nav-item"
          to="/signUp"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
