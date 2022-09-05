import React from "react";
import "./CartList.css";

function CartList({ cart }) {
  //   console.log(cart);
  return (
    <div className="CartList">
      {cart.map((elem, cartIndex) => {
        const { name, price, img } = elem;
        return (
          <div className="cart-list" key={cartIndex}>
            <img src={img} alt="" className="item-img" />
            <div className="item-info">
              <p>{name}</p>
              <p>{price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
