import React, { useState } from "react";
import "./Cart-Items.css";
import ColorList from "./Color-List";
import Counter from "./Counter";
import AddButton from "./AddButton";
import Image from "./Image";

const CartList = ({ props }) => {
  const [todos, setTodos] = useState("");

  const addTodo = (value) => {
    setTodos((c) => value);
  };

  return (
    <div className="Cart-List">
      <Image props={props} todos={todos} />
      <p>{props.name}</p>
      <p>Price: {props.price}</p>
      <ColorList props={props.colors} addTodo={addTodo} />
      <Counter />
      <AddButton />
    </div>
  );
};

export default CartList;
