import "./title.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import titleImage from "../../assets/images/choose-us/title-bg.svg";
import BtnWithRedArrow from "./btnWithRedArrow/btnWithRedArrow";

function Title() {
  return (
    <div className="title-container justify-center lg:justify-end">
      <div className="title-content">
        <div className="title-item items-center md:items-start">
          <p>FIND YOUR ENERGY</p>
          <img src={titleImage} alt="" className="title-image" />
          <h1 className="text-5xl leading-snug md:text-left font-semibold">
            MAKE YOUR BODY
            <br />
            <span className="font-[300]">FIT & PERFECT</span>
          </h1>
          <div className="btn-container">
            <BtnWithRedArrow text={"OUR CLASSES"} />
          </div>
        </div>
        <div className="hidden lg:flex flex-col-reverse items-center gap-6 mr-16">
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
