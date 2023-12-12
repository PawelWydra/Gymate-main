import "./introduce.css";
import { GiProgression } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { TbListCheck } from "react-icons/tb";

function Introduce() {
  return (
    <div className="introduce-container">
      <div className="introduce-card-container">
        <div className="introduce-card">
          <GiProgression />
          <h1>PROGRESSION</h1>
          <p>
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </div>
        <div className="introduce-card">
          <FaRunning />
          <h1>WORKOUT</h1>
          <p>
            With a variety of workouts to choose from, you'll have everything
            you need to get into the best shape of your life.
          </p>
        </div>
        <div className="introduce-card">
          <TbListCheck />
          <h1>NUTRITIONS</h1>
          <p>
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </div>
      <div className="introduce-info-container">
        <div className="info-item">
          <h3></h3>
          <h1></h1>
          <p></p>
          <div className="introduce-icon-container">
            <div className="introduce-icon"></div>
            <div className="introduce-icon"></div>
            <div className="introduce-icon"></div>
          </div>
          <button></button>
        </div>
        <div className="info-image-container">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
