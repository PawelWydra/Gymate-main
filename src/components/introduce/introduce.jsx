import "./introduce.css";
import { GiProgression } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { TbListCheck } from "react-icons/tb";
import weightLifter from "../../images/who-we-are/weightlifter.png";
import equipment from "../../images/who-we-are/equpments.png";
import machines from "../../images/who-we-are/gym.png";
import titleImage from "../../images/choose-us/title-bg.svg";
import girl from "../../images/who-we-are/girl-run.png";
import girlBackground from "../../images/who-we-are/girl-redbg.svg";
import girlSideText from "../../images/who-we-are/girl-side-text.png";
import girlWind from "../../images/who-we-are/wind.png";

function Introduce() {
  return (
    <div className="introduce-container">
      <div className="introduce-card-container">
        <div className="introduce-card">
          <GiProgression className="introduce-card-icon" />
          <h1>PROGRESSION</h1>
          <p>
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </div>
        <div className="introduce-card">
          <FaRunning className="introduce-card-icon" />
          <h1>WORKOUT</h1>
          <p>
            With a variety of workouts to choose from, you'll have everything
            you need to get into the best shape of your life.
          </p>
        </div>
        <div className="introduce-card">
          <TbListCheck className="introduce-card-icon" />
          <h1>NUTRITIONS</h1>
          <p>
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </div>
      <div className="introduce-info-container">
        <div className="info-text-container">
          <h3>WHO WE ARE</h3>
          <h1>Take Your Health And Body To Next Level</h1>
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="introduce-icon-container">
            <div className="introduce-icon">
              <img src={weightLifter} alt="Weight Lifter" />
              <h2>
                PROFESSIONAL
                <br /> TRAINERS
              </h2>
            </div>
            <div className="introduce-icon icon-border">
              <img src={equipment} alt="Equipment" />
              <h2>
                MODERN <br />
                EQUIPMENTS
              </h2>
            </div>
            <div className="introduce-icon">
              <img src={machines} alt="Machines" />
              <h2>
                FANCY GYM
                <br /> MACHINES
              </h2>
            </div>
          </div>
          <button className="introduce-btn">TAKE A TOUR</button>
          <img src={titleImage} alt="Title" className="info-image" />
        </div>
        <div className="info-image-container">
          <img src={girl} alt="Girl running" className="girl-img" />
          <img src={girlBackground} alt="" className="girl-bg-img"/>
          <img src={girlSideText} alt="" className="girl-sidetext-img" />
          <img src={girlWind} alt="" className="wind-img"/>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
