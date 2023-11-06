import { useState, useEffect } from "react";
import "../styles.scss";

export default function TopProducts() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const combinedProducts = [
          [
            {
              title: "MBJ Women's Solid Short Sleeve Boat Neck V",
              price: 9.85,
              description:
                "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
              id: 18,
              image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
              category: "women's clothing",
              rating: {
                rate: 4.7,
                count: 130,
              },
            },
            {
              title: "Men's Casual Slim Fit",
              price: 25.99,
              description:
                "Classic slim-fit shirt for men, perfect for any occasion",
              id: 19,
              image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
              category: "men's clothing",
              rating: {
                rate: 4.3,
                count: 190,
              },
            },
            {
              title: "Women's Casual T-Shirt",
              price: 15.99,
              description:
                "Comfortable and stylish women's t-shirt in various colors",
              id: 20,
              image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
              category: "women's clothing",
              rating: {
                rate: 4.5,
                count: 95,
              },
            },
            {
              title: "Men's Denim Jacket",
              price: 39.99,
              description: "Classic denim jacket for men, durable and stylish",
              id: 21,
              image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
              category: "men's clothing",
              rating: {
                rate: 4.6,
                count: 220,
              },
            },
            {
              title: "Women's Long Sleeve Blouse",
              price: 29.99,
              description:
                "Elegant long sleeve blouse for women, perfect for formal occasions",
              id: 22,
              image: "https://fakestoreapi.com/img/51eg55uW5jL._AC_UX679_.jpg",
              category: "women's clothing",
              rating: {
                rate: 4.8,
                count: 150,
              },
            },
            {
              title: "Men's Cargo Shorts",
              price: 19.99,
              description:
                "Comfortable cargo shorts for men, ideal for outdoor activities",
              id: 23,
              image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
              category: "men's clothing",
              rating: {
                rate: 4.4,
                count: 120,
              },
            },
            {
              title: "Women's Summer Dress",
              price: 34.99,
              description:
                "Stylish summer dress for women, perfect for warm days",
              id: 24,
              image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
              category: "women's clothing",
              rating: {
                rate: 4.7,
                count: 180,
              },
            },
            {
              title: "Men's Slim Fit Suit",
              price: 89.99,
              description:
                "Elegant slim-fit suit for men, suitable for formal events",
              id: 25,
              image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
              category: "men's clothing",
              rating: {
                rate: 4.9,
                count: 250,
              },
            },
            {
              title: "Women's Leather Jacket",
              price: 49.99,
              description:
                "Stylish leather jacket for women, a perfect addition to your wardrobe",
              id: 26,
              image: "https://fakestoreapi.com/img/51eg55uW5jL._AC_UX679_.jpg",
              category: "women's clothing",
              rating: {
                rate: 4.6,
                count: 190,
              },
            },
            {
              title: "Men's Athletic Shoes",
              price: 34.99,
              description:
                "Comfortable athletic shoes for men, ideal for sports and fitness",
              id: 27,
              image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
              category: "men's clothing",
              rating: {
                rate: 4.5,
                count: 210,
              },
            },
          ],

          ...data,
        ];
        console.log("combinedProducts", combinedProducts);
        const topProducts = combinedProducts.filter(
          (product) =>
            product.rating?.rate > 4 &&
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
      <h2>Winter Collection Best sellers</h2>
      <section className="featured-products">
        <div className="product-list">
          {topProducts.map((product) => (
            <>
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
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
