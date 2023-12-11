import "./navbar.css";
import mainLogo from "../../images/logo/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={mainLogo} alt="logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Schedule</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Classes</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-login">
          <FaRegUser className="login-icon-item" />
          <FaChartBar className="login-icon-item" />
        <div className="login-join-class">
          <div className="login-plus"><FaPlus /></div>
          <h1>JOIN CLASS NOW</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
