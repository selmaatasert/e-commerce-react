import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CategoryFilterContext } from "../context/AppContexts";
import Cart from "./Cart";
import "./NavBar.scss";

export default function NavBar() {
  const { dispatch } = useContext(CategoryFilterContext);

  const handleCategoryClick = (e) => {
    dispatch({ type: e.target.id });
  };

  return (
    <>
      <div className="header">
        <Link to="/" className="nav-header">
          Vogue Valley
        </Link>
        <nav className="header-nav">
          <ul>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span id="men">Men's Clothing</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span id="women">Women's Clothing</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span id="electronics">Electronics</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCategoryClick} to="/products">
                <span id="jewelery">Jewelry</span>
              </NavLink>
            </li>
            <li>
              <NavLink  onClick={handleCategoryClick} to="/contact">
                <span>contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Cart />
      </div>
    </>
  );
}
