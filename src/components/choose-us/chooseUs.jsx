import "./chooseUs.css";
import { FaCirclePlay } from "react-icons/fa6";
import mainImg from "../../images/choose-us/main-img.png";
function ChooseUs() {
  return (
    <div className="chooseUs-container">
      <div className="chooseUs-wrapper">
        <div className="chooseUs-image-container">
          <img src={mainImg} alt="" className="chooseUs-image" />
          <span className="red-span short-span"></span>
          <span className="red-span long-span"></span>
          <FaCirclePlay  className="image-play-btn"/>
        </div>
        <div className="chooseUs-info-container"></div>
      </div>
    </div>
  );
}

export default ChooseUs;
