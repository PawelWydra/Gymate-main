import "./title.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import titleImage from "../assets/../images/choose-us/title-bg.svg";
import BtnWithRedArrow from "./btnWithRedArrow/btnWithRedArrow";

function Title() {
  return (
    <div className="title-container">
      <div className="title-content">
        <div className="title-item max-w-screen-md">
          <p>FIND YOUR ENERGY</p>
          <img src={titleImage} alt="" className="title-image" />
          <h1 className="text-5xl">
            MAKE YOUR BODY
            <br />
            <span style={{ fontWeight: 300 }}>FIT & PERFECT</span>
          </h1>
          <div className="btn-container">
            <BtnWithRedArrow text={"OUR CLASSES"} />
          </div>
        </div>
        <div className="title-social">
          <FaFacebookF />
          <FaInstagram />
          <RiTwitterXLine /> <span className="red-line"></span>
          <h2 className="vericaltext">SHARE</h2>
        </div>
      </div>
    </div>
  );
}

export default Title;
