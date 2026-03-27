import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ addToCart }) {
  const products = [
    { 
      name: "Laptop", 
      price: 999, 
      image: "https://m.media-amazon.com/images/I/71pC3yGQ+zL._AC_UL480_FMwebp_QL65_.jpg" 
    },
    { 
      name: "Headphones", 
      price: 199, 
      image: "https://m.media-amazon.com/images/I/61R9DkrXqFL._AC_UL480_FMwebp_QL65_.jpg" 
    },
    { 
      name: "Watch", 
      price: 149, 
      image: "https://m.media-amazon.com/images/I/71f8jUovFjL._AC_UL480_FMwebp_QL65_.jpg" 
    },
    { 
      name: "Shoes", 
      price: 89, 
      image: "https://m.media-amazon.com/images/I/81f7mJ8v4BL._AC_UL480_FMwebp_QL65_.jpg" 
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          price={product.price}
          image={product.image}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;