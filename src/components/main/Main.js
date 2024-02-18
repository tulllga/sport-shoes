import React from "react";
import "./Main.css";

export default function Header(props) {
  return <div className="main">{<h3>{props.message}</h3>}</div>;
}
