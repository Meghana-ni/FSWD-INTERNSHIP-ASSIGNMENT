import React from "react";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">Amazon</div>
      <input type="text" placeholder="Search..." className="search-bar" />
      <nav>
        <a href="#">Sign In</a>
        <a href="#">Orders</a>
        <a href="#">Cart ({cartCount})</a>
      </nav>
    </header>
  );
}

export default Header;