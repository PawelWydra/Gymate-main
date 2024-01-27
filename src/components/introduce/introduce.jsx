import "./introduce.css";

import weightLifter from "../../assets/images/who-we-are/weightlifter.png";
import equipment from "../../assets/images/who-we-are/equpments.png";
import machines from "../../assets/images/who-we-are/gym.png";
import girl from "../../assets/images/who-we-are/girl-run.png";
import girlBackground from "../../assets/images/who-we-are/girl-redbg.svg";
import girlSideText from "../../assets/images/who-we-are/girl-side-text.png";
import girlWind from "../../assets/images/who-we-are/wind.png";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import SectionContainer from "../sectionContainer/sectionContainer";
import bgImage from "../../assets/images/who-we-are/background.jpg";
import CardContainer from "./CardContainer";

function Introduce() {
  return (
    <SectionContainer bg={bgImage}>
      <CardContainer/>
      <article className="flex justify-center text-black flex-1">
        <div className="info-text-container lg:max-w-[40%] flex-1">
          <header>
            <RedBgHeading text={"WHO WE ARE"} width="15rem" />
            <h1 className="text-4xl font-bold pt-8">
              Take Your Health And Body To The Next Level
            </h1>
          </header>
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex flex-col items-center md:flex-row md:gap-2">
            <div className="introduce-icon">
              <img src={weightLifter} alt="Weight Lifter" />
              <h4 className="text-xl font-semibold mt-4">
                PROFESSIONAL
                <br /> TRAINERS
              </h4>
            </div>
            <div className="introduce-icon border-x-0 md:border-x-2 border-gray-200	">
              <img src={equipment} alt="Equipment" />
              <h4 className="text-xl font-semibold mt-4">
                MODERN <br />
                EQUIPMENT
              </h4>
            </div>
            <div className="introduce-icon">
              <img src={machines} alt="Machines" />
              <h4 className="text-xl font-semibold mt-4">
                FANCY GYM
                <br /> MACHINES
              </h4>
            </div>
          </div>
          <button className="introduce-btn mt-8" aria-label="Take a Tour">
            TAKE A TOUR
          </button>
        </div>
        <div className="hidden lg:block relative flex-1 min-w-[50%]">
          <img
            src={girl}
            alt="Girl running"
            className="absolute h-auto lg:max-w-[32rem] xl:max-w-[35rem] left-[5rem] lg:top-[25%] xl:top-[20%] z-10"
          />
          <img
            src={girlBackground}
            alt=""
            className="absolute h-auto max-w-max top-[20%] left-[17rem]"
          />
          <img
            src={girlSideText}
            alt=""
            className="absolute h-auto max-w-max left-20 top-[20%]"
          />
          <img
            src={girlWind}
            alt=""
            className="absolute h-auto max-w-max left-[23rem] top-[20rem]"
          />
        </div>
      </article>
    </SectionContainer>
  );
}

export default Introduce;
