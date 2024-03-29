import "./navbar.css";
import React, { useState, useEffect } from "react";
import mainLogo from "../../assets/images/logo/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleMenu from "./toggleMenu";
import { menuItems } from "./navData";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggle, setToogle] = useState(false);

  const toggleMenu = () => {
    setToogle(!isToggle);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-container fixed w-full py-6 px-2 md:px-4 ${
        isScrolled ? "bg-black" : ""
      } z-50 transition duration-300 ease-in-out`}
    >
      <div className="flex-1">
        <img src={mainLogo} alt="logo" />
      </div>
      <ul className="hidden lg:flex flex-[1_0] min-w-[32rem] max-w-3xl justify-around">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar-login cursor-pointer flex-1">
        <GiHamburgerMenu size={20} className="lg:hidden hover:text-red-600 duration-300" onClick={toggleMenu} />
        <FaRegUser className="login-icon-item hover:text-red-600 duration-300" />
        <FaChartBar className="login-icon-item hover:text-red-600 duration-300" />
        <div className="login-join-class ">
          <div className="login-plus">
            <FaPlus />
          </div>
          <h1 className="hidden text-nowrap md:block ">JOIN CLASS NOW</h1>
        </div>
      </div>

        <ToggleMenu closeMenu={toggleMenu} isToggle={isToggle}/>
  
    </div>
  );
}

export default Navbar;
