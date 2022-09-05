import React from "react";
import ProductData from './ProductData'
import { NavLink, useNavigate } from "react-router-dom";

// import Header from "./header/Header";

function Products() {
  const navigate = useNavigate();

  return (
    <>
      <h3 style={{fontSize:"1.7rem",color: "white",marginLeft:"10px"}}>Vagitarian Pizza</h3>
      <div className="flex-container">
        {ProductData.map((elem)=>{
          const {img, name, price, id,link} = elem;
          return(
            <div className="menulist" key={id}>
              <button onClick={() => navigate(link)} className="img-btn">
                <img src={img} alt="" className="item-img" />
              </button>
              <div className="item-info">
                <p>{name}</p>
                <p>Price: {price}</p>
              </div>
          </div>
          )
        })}
      </div>

      {/* second container */}
      <h3 style={{fontSize:"1.7rem",color: "white",marginLeft:"10px"}}>Non Vagitarian Pizza</h3>
      <div className="flex-container">
        {ProductData.map((elem)=>{
          const {img, name, price, id,link} = elem;
          return(
            <div className="menulist" key={id}>
              <button onClick={() => navigate(link)} className="img-btn">
                <img src={img} alt="" className="item-img" />
              </button>
              <div className="item-info">
                <p>{name}</p>
                <p>Price: {price}</p>
              </div>
          </div>
          )
        })}
      </div>

      {/* third container */}
      <h3 style={{fontSize:"1.7rem",color: "white",marginLeft:"10px"}}>Spicy Pizza</h3>
      <div className="flex-container">
        {ProductData.map((elem)=>{
          const {img, name, price, id,link} = elem;
          return(
            <div className="menulist" key={id}>
              <button onClick={() => navigate(link)} className="img-btn">
                <img src={img} alt="" className="item-img" />
              </button>
              <div className="item-info">
                <p>{name}</p>
                <p>Price: {price}</p>
              </div>
          </div>
          )
        })}
      </div>

    </>
  );
}

export default Products;
