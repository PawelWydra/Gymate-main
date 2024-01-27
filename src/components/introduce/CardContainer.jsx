import "./introduce.css";
import { GiProgression } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { TbListCheck } from "react-icons/tb";

function CardContainer() {
  return (
    <article className="introduce-card-container text-black">
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
          With a variety of workouts to choose from, you'll have everything you
          need to get into the best shape of your life.
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
  );
}

export default CardContainer;
