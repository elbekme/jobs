import { NavLink } from "react-router-dom";
import { useContext } from "react";

import  '../../../css/Header.scss';
import NavbarLogo from '../../../assets/images/nabar-logo.png';
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header>
      <div className="container">
          <div className="navbar">
            <div className="navbar-left">
            {isAuthenticated ? (
          <NavLink to="/my-blogs">
            <img className="logo-nav" src={NavbarLogo} alt="" />
          </NavLink>
        ) : (
          <NavLink to="/">
            <img className="logo-nav" src={NavbarLogo} alt="logo" />
          </NavLink>
        )}
            </div>
            <div className="navbar-right">
              <NavLink className='link' to="/">Home</NavLink>
              {/* <NavLink to="/category">Category</NavLink> */}
              <NavLink className='link' to="/blogs">Blogs</NavLink>
              <NavLink className='link' to="/about">About Us</NavLink>
              <NavLink className='link' to="/register">Register</NavLink>
                {isAuthenticated ? (
                  <NavLink className='link-btn' to="/account">
                    <button>
                      Accout
                    </button>
                  </NavLink>
                ) : (
                  <NavLink className='link-btn' to="/login">
                    <button>
                      Login
                    </button>
                  </NavLink>
                )}
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
