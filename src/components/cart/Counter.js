import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="div-counter">
      <button className="btn-1" onClick={increaseCount}>
        +
      </button>
      <button>{count}</button>
      <button className="btn-2" onClick={decreaseCount} disabled={count === 0}>
        -
      </button>
    </div>
  );
};
export default Counter;
