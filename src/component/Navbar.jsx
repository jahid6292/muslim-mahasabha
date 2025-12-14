import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#0a5c36",
      color: "white",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h3>Muslim Mahasabha</h3>

      <div>
        <Link to="/" style={{marginRight:"15px"}}>Home</Link>
        <Link to="/about" style={{marginRight:"15px"}}>About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
