import React, { useState } from "react";
import "./Cart-Items.css";

const Image = ({ props, todos }) => {
  return (
    <div className="image-div">
      <img
        style={{ border: "1px solid black" }}
        src={`./images/${props.name}-${todos || props.colors[0]}.png`}
      />
    </div>
  );
};

export default Image;
