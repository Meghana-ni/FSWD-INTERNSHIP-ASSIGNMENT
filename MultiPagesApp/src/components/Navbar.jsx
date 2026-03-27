import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#0f172a", padding: "15px" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "white", marginRight: "20px" }}>
        About
      </Link>

      <Link to="/contact" style={{ color: "white" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;