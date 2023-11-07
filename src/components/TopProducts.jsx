import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopProducts.scss";

export default function TopProducts() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const combinedProducts = [...data];
        const topProducts = combinedProducts.filter(
          (product) =>
            product.rating?.rate > 3.8 &&
            (product.category === "men's clothing" ||
              product.category === "women's clothing")
        );
        setTopProducts(topProducts);
      });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 768, // Adjust the number of slides to show for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900, // Adjust the number of slides to show for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300, // Adjust the number of slides to show for smaller screens
        settings: {
          slidesToShow: 3,
        },
      }
    ],
  };

  return (
    <div className="top-container">
      <h2>Top Products</h2>
      <Slider {...settings}>
        {" "}
        {/* Use the Slider component with the settings */}
        {topProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="card-topproduct">
                <img src={product.image} alt={product.title} />
              {/* <div className="text-container">
                <h3>{product.title}</h3>
              </div> */}
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
