import React, { useState } from "react";
import "./ItemLink.css";
import FirstItemLinkData from "./FirstItemLinkData";
import Items from "../productData/Items";

function FirstItemLink() {
  const [quntity, setQuntity] = useState(1);
  // const [total, setTotal] = useState(FirstItemLinkData);
  const quntityIncrese = () => {
    const num = quntity + 1;
    setQuntity(num);
  };
  const quntityDecrese = () => {
    const num = quntity - 1;

    setQuntity(num);
    if (num <= 0) {
      setQuntity(quntity);
    }
  };

  return (
    <div>
      {FirstItemLinkData.map((elem, index) => {
        const { img, price, description, name, id } = elem;
        return (
          <div className="firstlink-container" key={id}>
            <div className="firstlink-img">
              <img src={img} className="main-img" />
            </div>
            <div className="block">
              <div className="firstlink-info">
                <p className="name">{name}</p>
                <p className="des">{description}</p>
              </div>
              <div className="price-info">
                <p>price: ${price}</p>
                <div className="quantity-info">
                  <p>quantity:</p>
                  <div className="in-de">
                    <button onClick={quntityDecrese} className="btn-pm">
                      -
                    </button>
                    <span>{quntity}</span>
                    <button onClick={quntityIncrese} className="btn-pm">
                      +
                    </button>
                  </div>
                </div>
                {/* <p>{total.map((item)=>item.price ).reduce((total,value)=>total + value ,0)}</p> */}
                <p>Total: ${quntity * price}</p>
                <div className="order-btn">
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Items />
    </div>
  );
}

export default FirstItemLink;
