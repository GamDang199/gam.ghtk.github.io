import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import Home from "../../pages/home/Home";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div>
        <Link to="/">
          <FaIcon.FaBars />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
