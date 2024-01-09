import { Link } from "react-router-dom";
import Logo from "../asset/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../stores/user";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(signOut());
    }
  };

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
          <Link
            to="/sign-in"
            className="main-nav-item"
            onClick={handleAuthClick}
          >
            <i className="fa fa-user-circle">
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </i>
          </Link>
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
