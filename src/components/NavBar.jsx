import { NavLink, Link } from "react-router-dom";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <>
      <div className="header">
        <Link to="/" className="nav-icon">
          Vogue Valley{" "}
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/products">
                <span>Men's Clothing</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <span>Women's Clothing</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <span>Electronics</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">
                <span>Jewelry</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Cart />
      </div>
    </>
  );
}
