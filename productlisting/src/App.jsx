import React from "react";
import ProductCard from "./components/ProductCard";

import shoesImg from "./assets/shoes.jpg";
import watchImg from "./assets/watch.jpg";
import bagImg from "./assets/bag.jpg";

const products = [
  {
    name: "Shoes",
    price: 1299,
    image: shoesImg,
  },
  {
    name: "Watch",
    price: 2499,
    image: watchImg,
  },
  {
    name: "Bag",
    price: 999,
    image: bagImg,
  },
];

const App = () => {
  return (
    <div className="container">
      <h1>🛒 Product Listing</h1>

      <div className="grid">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default App;