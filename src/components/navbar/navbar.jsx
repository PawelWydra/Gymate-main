import "./navbar.css";
import mainLogo from "../../assets/images/logo/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const menuItems = [
    "Home",
    "About",
    "Gallery",
    "Schedule",
    "Blog",
    "Pricing",
    "Classes",
    "Contact",
  ];

  return (
    <div className="navbar-container">
      <div className="">
        <img src={mainLogo} alt="logo" />
      </div>
      <ul className="hidden lg:flex w-1/2 justify-around">
        {menuItems.map((item, index) => (
          <li key={index} className="">{item}</li>
        ))}
      </ul>
      <div className="navbar-login ">
        <GiHamburgerMenu size={30} className="lg:hidden" />
        <FaRegUser className="login-icon-item" />
        <FaChartBar className="login-icon-item" />
        <div className="login-join-class">
          <div className="login-plus">
            <FaPlus />
          </div>
          <h1 className="hidden md:block">JOIN CLASS NOW</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
