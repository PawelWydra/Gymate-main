import "./chooseUs.css";
import { FaCirclePlay } from "react-icons/fa6";
import mainImg from "../../images/choose-us/main-img.png";
import ChooseUsGridItem from "./chooseUsGridItem/chooseUsGridItem";
import fitnessObjects from "./gridData.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";

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
          <RedBgHeading text={"WHY CHOOSE US"} />
          <h1 className="text-4xl font-semibold py-1 leading-tight">
            We Can Give A Shape Of <br /> Your Body Here!
          </h1>
          <p>
            At <strong>Gymate</strong>, we are dedicated to helping you achieve
            the body of your dreams. Our expert trainers and nutritionists will
            work with you to create a personalized fitness and nutrition plan
            that helps you reach your specific goals.
          </p>
          <div className="chooseUs-grid-container">
            {Object.values(fitnessObjects).map((item, index) => (
              <ChooseUsGridItem
                key={index}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>
          <button className="chooseUs-btn">JOIN WITH US</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
