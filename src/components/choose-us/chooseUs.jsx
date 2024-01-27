import "./chooseUs.css";
import { FaCirclePlay } from "react-icons/fa6";
import mainImg from "../../assets/images/choose-us/main-img.png";
import ChooseUsGridItem from "./chooseUsGridItem/chooseUsGridItem";
import fitnessObjects from "./gridData.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import SectionContainer from "../sectionContainer/sectionContainer.jsx";
import bg from "../../assets/images/choose-us/choose-bg.jpg";

function ChooseUs() {
  return (
    <SectionContainer bg={bg}>
      <div className="relative xl:flex justify-end">
        <img
          src={mainImg}
          alt=""
          className="absolute left-0 bottom-0 hidden xl:block w-[28rem]"
        />
        <span className="red-span short-span hidden xl:block"></span>
        <span className="red-span long-span hidden xl:block"></span>
        <FaCirclePlay className="image-play-btn hidden xl:block" />
        <div className="xl:w-1/2 flex flex-col items-center xl:items-start gap-6">
          <RedBgHeading text={"WHY CHOOSE US"} />
          <h1 className="text-4xl font-semibold py-1 leading-tight">
            We Can Give A Shape Of <br /> Your Body Here!
          </h1>
          <p className="max-w-lg text-pretty">
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
    </SectionContainer>
  );
}

export default ChooseUs;
