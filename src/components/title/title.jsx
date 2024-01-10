import "./title.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import titleImage from "../../images/choose-us/title-bg.svg"
import RedBgHeading from "./redBgHeading/redBgHeading";

function Title() {
  return (
    <div className="title-container">
      <div className="title-content">
        <div className="title-item">
          <RedBgHeading  text={"FIND YOUR ENERGY"}/>
          <h1>
            MAKE YOUR BODY
            <br />
            <span style={{ fontWeight: 300 }}>FIT & PERFECT</span>
          </h1>
          <button className="title-btn">OUR CLASSES</button>
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
