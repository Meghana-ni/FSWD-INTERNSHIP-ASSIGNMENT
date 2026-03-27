import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Function to increase cart count
  const addToCart = () => setCartCount(cartCount + 1);

  return (
    <div>
      <Header cartCount={cartCount} />
      <Banner />
      <CategorySection />
      <ProductGrid addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;