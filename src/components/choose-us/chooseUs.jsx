import "./chooseUs.css";
import { FaCirclePlay } from "react-icons/fa6";
import mainImg from "../../images/choose-us/main-img.png";
import ChooseUsGridItem from "./chooseUsGridItem/chooseUsGridItem";

function ChooseUs() {
  return (
    <div className="chooseUs-container">
      <div className="chooseUs-wrapper">
        <div className="chooseUs-image-container">
          <img src={mainImg} alt="" className="chooseUs-image" />
          <span className="red-span short-span"></span>
          <span className="red-span long-span"></span>
          <FaCirclePlay className="image-play-btn" />
        </div>
        <div className="chooseUs-info-container">
          <h2>WHY CHOOSE US</h2>
          <h1>
            We Can Give A Shape Of <br /> Your Body Here!
          </h1>
          <p>
            At <strong>Gymate</strong>, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="chooseUs-grid-container">
            <ChooseUsGridItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
