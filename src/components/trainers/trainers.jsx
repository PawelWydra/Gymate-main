import TrainerCard from "./trainerCard/trainerCard.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import Testimonials from "../testimonials/testimonials.jsx";
import trainerArray from "./trainersData";
import SectionContainer from "../sectionContainer/sectionContainer";

function TrainersAndTestimonials() {
  return (
    <SectionContainer bg="#fff">
      <div className="text-black text-center">
        <div className="flex flex-col items-center gap-4 mb-10">
          <RedBgHeading text={"GYM TRAINERS"} />
          <h1 className="text-4xl font-semibold max-w-lg">
            Team Of Expert Coaches
          </h1>
          <p className="max-w-lg text-gray-500">
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 items-center md:flex-row  flex-wrap">
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
    </SectionContainer>
  );
}

export default TrainersAndTestimonials;
