import React, { useState } from "react";
import pizzaData from "./pizzaData";
import { useNavigate } from "react-router-dom";
// import CartList from "../CartList";
import "./items.css";

function Items({ addToCart, cart }) {
  const navigate = useNavigate();
  // const [cart, setCart] = useState([]);
  // console.log(cart);
  // const [showCart, setShowCart] = useState(false);

  // const addToCart = (data) => {
  //   setCart([...cart, data]);
  //   // console.log(data)
  // };

  return (
    <>
      <div className="pizza-container">
        <h3 style={{ paddingLeft: "10x", fontSize: "2rem", color: "white" }}>
          Menu List
        </h3>

        <div className="flex-container">
          {pizzaData.map((elem) => {
            const { img, name, price, id, link } = elem;
            return (
              <div className="menulist" key={id}>
                <button onClick={() => navigate(link)} className="img-btn">
                  <img src={img} alt="" className="item-img" />
                </button>
                <div className="item-info">
                  <p>{name}</p>
                  <p>Price: {price}</p>
                </div>
                {/* <div className="item-info">
                <button id="btn" onClick={() => addToCart(elem)}>
                  order
                </button> 
              </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Items;
