import React, { useState } from "react";
import "../css/color1.css";
const ColorList1 = ({ colors }) => {
  const [activeColor, setActiveColor] = useState(null);
  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div
      style={{
        display: flex,
        flexDirection: column,
        justifyContent: left,
        textAlign: left,
        // border: 1px solid red,
      }}
    >
      <p>Color</p>
      {/* <h2>Color list</h2> */}
      <div style={{ display: flex, flexDirection: row }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorClick(color)}
            style={{
              // color: color,
              backgroundColor: color,
              cursor: pointer,
              padding: 0, //top, rigth,
              margin: 0% 2% 0% 2%,
              borderRadius: 50%,
              width: 20px,
              height: 20px,
            }}
            className={activeColor === color ? active : ``}
          >
            {/* {color} */}
          </div>
        ))}
      </div>

      {/* <p>Active Color: {activeColor || `None`}</p> */}
    </div>
  );
};
export default ColorList1;