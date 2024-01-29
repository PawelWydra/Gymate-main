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

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.9;

      if (scrollPosition > triggerPosition) {
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



  return isToggle ? (
    <ToggleMenu />
  ) : (
    <div
      className={`navbar-container fixed w-full ${
        isScrolled ? "bg-black" : ""
      } z-50 transition duration-300 ease-in-out`}
    >
      <div className="flex-1">
        <img src={mainLogo} alt="logo" />
      </div>
      <ul className="hidden lg:flex flex-[2_2] max-w-3xl justify-around">
        {menuItems.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar-login flex-1">
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
