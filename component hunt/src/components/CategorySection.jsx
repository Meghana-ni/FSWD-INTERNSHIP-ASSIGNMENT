import React from "react";

function CategorySection() {
  const categories = ["Electronics", "Clothing", "Books", "Toys", "Home"];
  return (
    <div className="category-section">
      {categories.map((cat) => (
        <div key={cat} className="category-card">
          {cat}
        </div>
      ))}
    </div>
  );
}

export default CategorySection;