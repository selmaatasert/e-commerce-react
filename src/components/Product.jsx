import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./Product.scss";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { CartContext } from "../context/AppContexts";
import { ImSpinner } from "react-icons/im";

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { dispatchCartCount, cartCount,  dispatchCart} = useContext(CartContext);
  const [showWarning, setShowWarning] = useState(true);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
      setLoading(false)
      setProduct(data)});
  }, [id]);

  const handleDecreaseCounter = () => {
    dispatchCartCount({ type: "decrement" });
  };

  const handleIncreaseCounter = () => {
    if (cartCount.count === 10) {
      setShowWarning(false);
    } else {
      dispatchCartCount({ type: "increment" });
    }
  };

  useEffect(() => {
    if (!showWarning) {
      setTimeout(() => {
        setShowWarning(true);
      }, 2000);
    }
  }, [showWarning]);

  useEffect(() => {
    dispatchCartCount({ type: "reset" });
  }, []);


 const handleAddToCart = () => {

    
    dispatchCart({type:"add", id:parseInt(id), count: cartCount.count, product : product})
 }

  return (
    <>
    {loading && <ImSpinner className="spin" />}
    <div className="single-product-container">
      <div>
        <img src={product.image} alt="" />
      </div>
      <div className="single-info">
        <h3>{product.title}</h3>
        <p>{product.rating?.rate}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p> {product.description}</p>
        <div>
          <BsDashSquare onClick={handleDecreaseCounter} />
          <span>{cartCount.count}</span>
          <BsPlusSquare onClick={handleIncreaseCounter} />
          <p hidden={showWarning}>You cannot add more than 10 items!!</p>
        </div>
        <Link onClick={handleAddToCart} to="/cart">Add to cart</Link>
      </div>
    </div>
    </>
  );
}
