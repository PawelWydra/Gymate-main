import "./introduce.css";
import { GiProgression } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { TbListCheck } from "react-icons/tb";
import weightLifter from "../../images/who-we-are/weightlifter.png";
import equipment from "../../images/who-we-are/equpments.png";
import machines from "../../images/who-we-are/gym.png";
import girl from "../../images/who-we-are/girl-run.png";
import girlBackground from "../../images/who-we-are/girl-redbg.svg";
import girlSideText from "../../images/who-we-are/girl-side-text.png";
import girlWind from "../../images/who-we-are/wind.png";
import RedBgHeading from "../title/redBgHeading/redBgHeading";

function Introduce() {
  return (
    <section className="introduce-container">
      <article className="introduce-card-container">
        <div className="introduce-card">
          <GiProgression className="introduce-card-icon" />
          <h2 className="text-2xl py-4 font-bold">PROGRESSION</h2>
          <p className="text-center px-2">
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </div>
        <div className="introduce-card">
          <FaRunning className="introduce-card-icon" />
          <h2 className="text-2xl py-4 font-bold">WORKOUT</h2>
          <p className="text-center px-2">
            With a variety of workouts to choose from, you'll have everything
            you need to get into the best shape of your life.
          </p>
        </div>
        <div className="introduce-card">
          <TbListCheck className="introduce-card-icon" />
          <h2 className="text-2xl py-4 font-bold">NUTRITION</h2>
          <p className="text-center px-2">
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </article>
      <article className="introduce-info-container py-20">
        <div className="info-text-container">
          <header>
            <RedBgHeading text={"WHO WE ARE"} />
            <h1 className="text-4xl font-bold pt-8">
              Take Your Health And Body To The Next Level
            </h1>
          </header>
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="introduce-icon-container">
            <div className="introduce-icon">
              <img src={weightLifter} alt="Weight Lifter" />
              <h4 className="text-xl font-semibold mt-4">
                PROFESSIONAL
                <br /> TRAINERS
              </h4>
            </div>
            <div className="introduce-icon icon-border">
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
          <button
            className="introduce-btn mt-8
          "
            aria-label="Take a Tour"
          >
            TAKE A TOUR
          </button>
        </div>
        <div className="info-image-container">
          <img src={girl} alt="Girl running" className="girl-img" />
          <img src={girlBackground} alt="" className="girl-bg-img" />
          <img src={girlSideText} alt="" className="girl-sidetext-img" />
          <img src={girlWind} alt="" className="wind-img" />
        </div>
      </article>
    </section>
  );
}

export default Introduce;
