import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext, CategoryFilterContext } from "../context/AppContexts";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import "./CartSummary.scss";


export default function CartSummary() {
  const { dispatch } = useContext(CategoryFilterContext);
  const { cart, dispatchCart } = useContext(CartContext);
  const [showWarning, setShowWarning] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);

  const handleDecreaseCounter = (id) => {
    dispatchCart({ type: "decrement", id: id });
  };

  const handleIncreaseCounter = (id) => {
    if (cart.find((item) => item.id === id)?.count === 10) {
      setShowWarning(false);
    } else {
      dispatchCart({ type: "increment", id: id });
    }
  };

  useEffect(() => {
    if (!showWarning) {
      setTimeout(() => {
        setShowWarning(true);
      }, 2000);
    }
  }, [showWarning]);

  const handleCheckOut = () => {
    dispatchCart({ type: "reset" });
    setShowSuccess(false);
  };

  const handleCategoryClick = () => {
    dispatch({ type: "all" });
  };

  return (
    <>
      <div className="cart-container" hidden={cart.length === 0}>
        {cart?.map((cartItem, i) => (
          <div key={i}>
            <img src={cartItem.product.image} />
            <div className="item-summary">
              <p>{cartItem.product.title}</p>
              <p>€{cartItem.product.price}</p>
              <div className="item-counter">
                <BsDashSquare
                  onClick={() => handleDecreaseCounter(cartItem.product.id)}
                />
                <span>{cartItem.count}</span>
                <BsPlusSquare
                  onClick={() => handleIncreaseCounter(cartItem.product.id)}
                />
              </div>
            </div>
          </div>
        ))}
        <div>
          <p>
            Subtotal(Total items:{" "}
            {cart?.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )}
            )
          </p>
          <p>
            €
            {cart?.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.product.price * currentValue.count,
              0
            )}
          </p>
        </div>
        <p hidden={showWarning}>You cannot add more than 10 items!!</p>
        <button onClick={handleCheckOut}>Checkout</button>
      </div>
      <h2 className="success-msg" hidden={showSuccess}>
        Checkout Successful!!
      </h2>
      <div className="empty-cart" hidden={cart.length !== 0}>
        <p>Your cart is empty</p>
        <Link to="/products" onClick={handleCategoryClick}> Continue Shopping</Link>
      </div>
    </>
  );
}
