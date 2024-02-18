// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
// import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { SearchBox } from "./components/search/SearchBox";
import Carts from "./components/cart/Carts";

const App = () => {
  const products = [
    {
      id: 1,
      name: "jordan-max-aura-5",
      price: 19.99,
      colors: ["black", "white", "gray", "yellow"],
      picture: "https://example.com/product1.jpg",
    },
    {
      id: 2,
      name: "tatum-1-home-team-pf-basketball-shoes",
      price: 24.99,
      colors: ["white", "green", "gray"],
      picture: "https://example.com/product2.jpg",
    },
    {
      id: 3,
      name: "luka-2-bred-pf-basketball",
      price: 29.99,
      colors: ["black", "white", "yellow"],
      picture: "https://example.com/product3.jpg",
    },
    {
      id: 4,
      name: "jordan-one-take-4-pf-shoes",
      price: 15.99,
      colors: ["green", "white"],
      picture: "https://example.com/product4.jpg",
    },
    {
      id: 5,
      name: "jumpman-two-trey-shoes",
      price: 39.99,
      colors: ["MediumSeaGreen", "black", "red", "SlateBlue"],
      picture: "https://example.com/product5.jpg",
    },
  ];

  const [searchProducts, setSearch] = useState("");
  const addSearch = (event) => {
    setSearch((c) => event.target.value);
  };
  const filterProducts = products.filter((el) =>
    el.name.toLocaleLowerCase().includes(searchProducts)
  );

  const [selectColor, setSelect] = useState("");
  const addSelect = (event) => {
    console.log("Color: " + event.target.value);
    setSelect((c) => event.target.value);
  };
  const filterColor = products.filter((el) => el.colors.includes(selectColor));

  // const [minPrice, setMinPrice] = useState("");
  // const addMinPrice = (event) => {
  //   console.log("Min price: " + event.target.value);
  //   setMinPrice((c) => event.target.value);
  // };
  // const filterMinPrices = products.filter((el) => el.price.includes(minPrice));

  return (
    <div className="App">
      <Header title="My header" subtitle="subtitle2" />
      {/* <Main message="My content" /> */}
      <SearchBox
        searchName={addSearch}
        selectColor={addSelect}
        // searchMinPrice={addMinPrice}
      />
      <Carts props={filterProducts} />
      <Footer note="Footer Note" />
    </div>
  );
};

export default App;
