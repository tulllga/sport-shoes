import React from "react";
import "./search.css";

export const SearchBox = (props) => (
  <div className="search-box">
    <input
      className="input-box"
      type="search"
      placeholder="Бүтээгдэхүүний нэр оруулна уу"
      onChange={props.searchName}
    />
    <select className="select-box" onChange={props.selectColor}>
      <option value="">color</option>
      <option value="black">black</option>
      <option value="white">white</option>
      <option value="gray">gray</option>
      <option value="yellow">yellow</option>
      <option value="green">green</option>
      <option value="MediumSeaGreen">MediumSeaGreen</option>
      <option value="red">red</option>
      <option value="SlateBlue">SlateBlue</option>
    </select>
    <input
      className="input-min"
      type="search"
      placeholder="Доод үнэ"
      // onChange={}
    />
    <input
      className="input-max"
      type="search"
      placeholder="Дээд үнэ"
      // onChange={}
    />
  </div>
);
