import "./Cart.scss"
import {BsCart3} from "react-icons/bs"
import {Link} from "react-router-dom"
import { CartContext } from "../context/AppContexts";
import { useContext } from "react";

export default function Cart() {
  const { cart } = useContext(CartContext);
  
  return (
    <div className="cart-icon-container" >
      <Link to= "/cart">
       <BsCart3 className="cart-icon"/>
      </Link>
    <div className="nav-cart-count">{cart?.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )}</div>
    </div>
  )
}
