import "./trainers.css";
import TrainerCard from "./trainerCard/trainerCard.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";

function Trainers() {
  return (
    <div className="trainers-container">
      <div className="trainers-wrapper">
        <RedBgHeading text={"GYM TRAINERS"} />
        <h1>Team Of Expert Coaches</h1>
        <p>
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className="trainer-card-container">
          <TrainerCard />
        </div>
      </div>
    </div>
  );
}

export default Trainers;
