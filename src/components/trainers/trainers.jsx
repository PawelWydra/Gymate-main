import "./trainers.css";
import TrainerCard from "./trainerCard/trainerCard.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import johnLevis from "../../images/trainers/trainer1.png";
import johnatanDoe from "../../images/trainers/trainer2.png";
import anaJune from "../../images/trainers/trainer3.png";

const trainerArray = [
  {
    image: johnLevis,
    name: "John Levis",
    specialization: "Yoga Trainer",
  },
  {
    image: johnatanDoe,
    name: "Johnatan Doe",
    specialization: "Fitness Instructor",
  },
  {
    image: anaJune,
    name: "Ana June",
    specialization: "Pilates Instructor",
  },
];

function Trainers() {
  return (
    <div className="trainers-container">
      <div className="trainers-wrapper my-24 text-center">
        <RedBgHeading text={"GYM TRAINERS"} />
        <h1 className="text-4xl font-semibold max-w-lg">
          Team Of Expert Coaches
        </h1>
        <p className="max-w-lg text-gray-500">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className="flex flex-col gap-16 md:flex-row">
          {trainerArray.map((trainer, index) => (
            <TrainerCard
              key={index}
              trainer={trainer.image}
              name={trainer.name}
              specialization={trainer.specialization}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trainers;
