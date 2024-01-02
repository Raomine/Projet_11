import { Link } from "react-router-dom";
import Logo from "../asset/argentBankLogo.png";
import { useAuth } from "../services/AuthContext";

const Layout = ({ children }) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <Link to="/sign-in" onClick={logout} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          ) : (
            <Link to="/sign-in" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
      {children}
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default Layout;
