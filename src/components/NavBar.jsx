import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CategoryFilterContext, LoginContext } from "../context/AppContexts";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";
import Logo from "./assets/3.png";

export default function NavBar() {
  const { dispatch } = useContext(CategoryFilterContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const {login, dispatchLogin} = useContext(LoginContext)

  const handleCategoryClick = (e) => {
    dispatch({ type: e.target.id });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    dispatchLogin({type: "loggedOut"})
  } 

  return (
    <>
      <div className="header">
        <Link to="/" className="nav-header">
          <img src={Logo} alt="logo" />
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        />
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span className="nav-span" id="men">
                  Men
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span className="nav-span" id="women">
                  Women
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span className="nav-span" id="electronics">
                  Electronics
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span className="nav-span" id="jewelery">
                  Jewelry
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/contact">
                <span className="nav-span">Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="login-and-cart">
      { !login.loggedIn ? 
        <Link to="/login">
          <span className="nav-span">Sign In</span>
        </Link> :
        <Link onClick={handleSignOut} to="/">
          <span className="nav-span">Sign Out</span>
        </Link> }
        <Cart />
        </div>
      </div>
    </>
  );
}
