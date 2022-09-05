import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/Products";
// import About from "./components/about/About";
// import Contact from "./components/Contact";
import CartList from "./components/CartList";
// import Items from "./components/productData/Items";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
import ErrorPage from "./ErrorPage";
import FirstItemLink from "./components/itemLinks/FirstItemLink";
import SecondItemLink from "./components/itemLinks/SecondItemLink ";
import { useState, useEffect } from "react";

function App() {
  const [nav, setNav] = useState(false);
  // const [showCart, setShowCart] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const h = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/" className="h-img">
          {/* <img src={logo} alt="" className="h-img"/> */}
          <span>PizzaHut</span>
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
          <NavLink to="#" className="vip">
            Get VIP Menbership
          </NavLink>
          <button className="btn" onClick={openNav}>
            {/* click me */}
            <i className="bx bx-menu"></i>
          </button>
        </div>
      </header>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cartList" element={<CartList />} />
        <Route path="/firstitemlink" element={<FirstItemLink />} />
        <Route path="/seconditemlink" element={<SecondItemLink />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
