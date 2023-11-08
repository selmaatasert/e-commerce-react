import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CategoryFilterContext,
  PriceFilterContext,
} from "../context/AppContexts";
import "./Products.scss";
import { ImSpinner } from "react-icons/im";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


export default function Products() {
  const { categoryFilter } = useContext(CategoryFilterContext);
  const { minPriceFilter, maxPriceFilter } = useContext(PriceFilterContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    if ("" !== categoryFilter.filter) {
      fetch(
        `https://fakestoreapi.com/products/category/${categoryFilter.filter}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setProducts(
            data.sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1))
          );
          setAllProducts(data)
        });
    } else {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setProducts(
            data.sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1))
          );
          setAllProducts(data)
        });
    }
  }, [categoryFilter]);

  const handleSort = (e) => {
    if (e.target.value === "highest") {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
    } else if (e.target.value === "lowest") {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (e.target.value === "asc") {
      products.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (e.target.value === "desc") {
      products.sort((a, b) => (a.title < b.title ? 1 : -1));
    } else if (e.target.value === "popular") {
      products.sort((a, b) => (a.rating.rate < b.rating.rate ? 1 : -1));
    }
    setProducts([].concat(products));
  };
 
  const handleSearch = (e) => {
    if (e.target.value){
      const filtered = allProducts.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())    )
    setProducts([].concat(filtered)) ;
    } else {
      setProducts(allProducts);
    }
    
  }

  return (
    <>
    
      {loading && <ImSpinner className="spin" />}
      <div className="sorting-and-products">
        <div className="search-and-sorting">
          <div className="search">
            <label className="search-label" htmlFor="find">Search:</label>
            <input type="text" name="find" onChange={handleSearch}/>
          </div>
          <div className="sort">
            <select name="sorting" onChange={handleSort}>
              <option value="popular">Most Popular</option>
              <option value="highest">Highest Price</option>
              <option value="lowest">Lowest Price</option>
              <option value="asc">Name Ascending</option>
              <option value="desc">Name Descending</option>
            </select>
          </div>
        </div>
        <div
          className={
            loading
              ? "all-products-container loading"
              : "all-products-container"
          }
        >
          {products
            .filter(
              (product) =>
                product.price > minPriceFilter && product.price < maxPriceFilter
            )
            .map((product, i) => (
              <Link to={`/products/${product.id}`} key={i}>
                <li>
                  <div className="product-container">
                    <img src={product.image} alt="" />
                    <p>{product.title}</p>
                    <div className="rating-price">
                      <p> {product.rating.rate}</p>
                      <Rating
      style={{ maxWidth: 100 }}
      value={product.rating.rate}
      readOnly
    />
                      <p>€{product.price}</p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
