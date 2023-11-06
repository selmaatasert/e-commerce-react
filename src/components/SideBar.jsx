import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  CategoryFilterContext,
  PriceFilterContext,
} from "../context/AppContexts";
import "./SideBar.scss";

export default function SideBar() {
  const { dispatch } = useContext(CategoryFilterContext);
  const { setMinPriceFilter, minPriceFilter, setMaxPriceFilter, maxPriceFilter } = useContext(PriceFilterContext);

  const handleCategoryClick = (e) => {
    dispatch({ type: e.target.id });
  };

  const handleMinPriceChange = (e) => {
    if(e.target.value) {
    setMinPriceFilter(e.target.value);
    } else {
      setMinPriceFilter(0)
    }
  };

  const handleMaxPriceChange = (e) => {
    if (e.target.value) {
      setMaxPriceFilter(e.target.value);
    } else {
      setMaxPriceFilter(100000);
    }
  };
  const handleResetPrice = () => {
    setMaxPriceFilter(100000)
    setMinPriceFilter(0)
  }

  return (
    <>
      <div className="sidebar-container">
        <h4>Categories</h4>
        <div className="sidebar-categories">
          <NavLink onClick={handleCategoryClick} to="/products">
            <span id="all">All</span>
          </NavLink>

          <NavLink onClick={handleCategoryClick} to="/products">
            <span id="men">Men's Clothing</span>
          </NavLink>

          <NavLink onClick={handleCategoryClick} to="/products">
            <span id="women">Women's Clothing</span>
          </NavLink>

          <NavLink onClick={handleCategoryClick} to="/products">
            <span id="electronics">Electronics</span>
          </NavLink>

          <NavLink onClick={handleCategoryClick} to="/products">
            <span id="jewelery">Jewelry</span>
          </NavLink>
        </div>

        <h4>Price</h4>
        <div className="price-filter">
          <label htmlFor="min">min</label>
          <input name="min" onChange={handleMinPriceChange} type="number" value={minPriceFilter === 0 ? "" : minPriceFilter} />
          <label htmlFor="max">max</label>
          <input name="max" onChange={handleMaxPriceChange} type="number" value={maxPriceFilter === 100000 ? "" : maxPriceFilter}/>
        </div>
         <button onClick={handleResetPrice}>Reset Filter</button>
      </div>

    </>
  );
}
