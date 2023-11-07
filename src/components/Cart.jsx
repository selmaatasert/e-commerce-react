import "./Cart.scss"
import {BsCart3} from "react-icons/bs"
import {Link} from "react-router-dom"

export default function Cart() {
  return (
    <div className="cart-icon-container" >
      <Link to= "/cart">
       <BsCart3 className="cart-icon"/>
      </Link>
    <div className="nav-cart-count">0</div>
    </div>
  )
}
