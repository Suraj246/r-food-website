import React, { useState } from "react";
import "./Home.css";
import Products from "../Products";
import About from "../about/About";
import Contact from "../Contact";
import Items from "../productData/Items";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CartList from "../CartList";
import { NavLink } from "react-router-dom";

function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, data]);
    // console.log(data);
  };
  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <>
      {/* <Header count={cart.length} handleShow={handleShow} cart={cart} /> */}
      <div className="">
        <div className="bg-img">
          <img src={"images/p3.jpg"} alt="" className="img" />
        </div>
        <div className="texton-img">
          <div className="c-name">
            <p>PizzaHut Pizza </p>
            <p>pizza to fit any taste</p>
            <NavLink to="/products" className="go-btn">
              Order Now
            </NavLink>
          </div>
        </div>
        <div>
          {/* {showCart ? (
            <CartList cart={cart} />
          ) : (
            <Items addToCart={addToCart} />
          )}

          <About handleShow={handleShow} /> */}
          <Items />
          <About />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
