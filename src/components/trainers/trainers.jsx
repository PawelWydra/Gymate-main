import "./trainers.css";
import TrainerCard from "./trainerCard/trainerCard.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import Testimonials from "../testimonials/testimonials.jsx";
import trainerArray from "./trainersData";

function TrainersAndTestimonials() {
  return (
    <div className="trainers-container flex flex-col">
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
      <Testimonials />
    </div>
  );
}

export default TrainersAndTestimonials;
