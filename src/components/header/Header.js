import { NavLink, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../home/Home";
import CartList from "../CartList";
import Pro from "../Products";
import React from "react";

function Header({ count, handleShow }) {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div>
      <header className="App-header">
        <NavLink to="/" className="h-img">
          {/* <img src={logo} alt="" className="h-img"/> */}
          <span>Navbar</span>
        </NavLink>
        <ul className="ul" id={nav ? "hidden" : "ul"}>
          <li>
            <NavLink onClick={closeNav} to="/" className="a">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeNav} to="/products" className="a">
              Product
            </NavLink>
          </li>
          <li>
            {/* <NavLink onClick={closeNav} to="/about" className="a">About</NavLink> */}
            <a href="#about" onClick={closeNav} className="a">
              About
            </a>
          </li>
          <li>
            {/* <NavLink onClick={closeNav} to="/contact" className="a">Contact</NavLink> */}
            <a href="#contact" onClick={closeNav} className="a">
              Contact
            </a>
          </li>
        </ul>

        <div className="corner">
          {/* <NavLink to="#">Sing Up</NavLink>
          <NavLink to="#">Sing In</NavLink> */}
          <NavLink to="#" className="vip">
            Get VIP Menbership
          </NavLink>
          <button className="btn" onClick={openNav}>
            click me
          </button>
          <button className="cart" onClick={() => handleShow(true)}>
            cart
            {/* <NavLink to="" className="cart"> */}
            {/* <i className="bx bx-cart " ></i> */}
            <sup>{count}</sup>
            {/* </NavLink> */}
          </button>
        </div>
      </header>
      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CartList" element={<CartList />} />
      </Routes> */}
    </div>
  );
}

export default Header;
