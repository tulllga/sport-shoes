import React, { useState } from "react";
import "./Cart.css";
import CartItems from "./Cart-Items";

const Carts = ({ props }) => {
  return (
    <div className="cart">
      {props.map((el) => (
        <CartItems props={el} key={el.id} />
      ))}
    </div>
  );
};

export default Carts;
