import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ProductList from "./views/ProductPage";
import SingleProduct from "./views/SingleProduct";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import {
  CartContext,
  CategoryFilterContext,
  PriceFilterContext,
} from "./context/AppContexts";
import "./App.css";
import { useReducer, useState } from "react";
import { categoryFilterReducer } from "./reducers/CategoryFilterReducer";
import { cartCounterReducer } from "./reducers/CartCounterReducer";
import CartPage from "./views/CartPage";
import { addToCartReducer } from "./reducers/AddToCartReducer";

function App() {
  const [categoryFilter, dispatch] = useReducer(categoryFilterReducer, {
    filter: "",
  });
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(100000);
  const [cartCount , dispatchCartCount] = useReducer(cartCounterReducer, {count:0});
  const [cart, dispatchCart] = useReducer(addToCartReducer, []) ;

  return (
    <>
      <CategoryFilterContext.Provider value={{ categoryFilter, dispatch }}>
        <PriceFilterContext.Provider
          value={{
            minPriceFilter,
            setMinPriceFilter,
            maxPriceFilter,
            setMaxPriceFilter,
          }}
        >
          <CartContext.Provider value = {{cartCount, dispatchCartCount, cart, dispatchCart}} >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart"  element={<CartPage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          </CartContext.Provider>
        </PriceFilterContext.Provider>
      </CategoryFilterContext.Provider>
    </>
  );
}

export default App;
