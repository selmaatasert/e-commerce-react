import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CategoryFilterContext } from "../context/AppContexts";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import "./NavBar.scss";
import Logo from "./assets/3.png";

export default function NavBar() {
  const { dispatch } = useContext(CategoryFilterContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (e) => {
    dispatch({ type: e.target.id });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <Cart />
      </div>
    </>
  );
}
