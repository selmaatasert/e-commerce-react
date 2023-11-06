import { useState, useEffect } from "react";
import "./TopProducts.scss";
import { Link } from "react-router-dom";

export default function TopProducts() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const combinedProducts = [...data];
        console.log("combinedProducts", combinedProducts);
        const topProducts = combinedProducts.filter(
          (product) =>
            product.rating?.rate > 3.8 &&
            (product.category === "men's clothing" ||
              product.category === "women's clothing")
        );
        console.log("topProducts", topProducts);
        setTopProducts(topProducts);
      });
    // .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h2>Top Products</h2>
      <section className="featured-products">
        <div className="product-list">
          {topProducts.map((product) => (
            <>
              <Link to={`/products/${product.id}`}>
                <div className="card">
                  <div className="product" key={product.id}>
                    <div className="image-container">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="text-container">
                      <h3>{product.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
