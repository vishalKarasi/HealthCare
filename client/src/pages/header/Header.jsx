import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { LanguageIcon, MoonIcon, SunIcon } from "@assets/icons/icons";
import { useTheme } from "@context/ThemeContext";
import { useAuthContext } from "@context/authContext";
import useLogout from "@hooks/auth/useLogout";

function Header() {
  const { mode, toggleMode } = useTheme();
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.svg" alt="logo" loading="lazy" />
        <span>Healthcare</span>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>

      <div className="options">
        <button>
          <LanguageIcon />
        </button>
        <button onClick={toggleMode}>
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>

        {authUser ? (
          <button className="btn btnPrimary" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/auth" className="btn btnPrimary">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
