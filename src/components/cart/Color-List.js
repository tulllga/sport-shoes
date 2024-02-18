import React, { useState } from "react";
import "./Color-List.css";

const ColorList = ({ props, addTodo }) => {
  const [activeColor, setActiveColor] = useState(null);
  const handleColorClick = (color) => {
    setActiveColor(color);
    addTodo(color);
  };

  return (
    <div className="color-list">
      {props.map((color) => (
        <div
          key={color}
          onClick={() => handleColorClick(color)}
          style={{
            listStyle: "none",
            float: "left",
            background: color,
            cursor: "pointer",
            padding: "8px",
            margin: "5px",
            borderRadius: "20px",
            borderbottomColor: "blue",
          }}
          className={activeColor === color ? "active" : ""}
        ></div>
      ))}
    </div>
  );
};
export default ColorList;
