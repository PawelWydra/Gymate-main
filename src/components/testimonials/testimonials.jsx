import RedBgHeading from "../title/redBgHeading/redBgHeading";
import quotes from "../../images/testimonials/quotes.png";
import testimonialNew from "../../images/testimonials/testimonial-new.jpg";
import ArrowRedBtn from "./arrowRedBtn/arrowRedBtn";
import LogoContainer from "./logoContainer/logoContainer";

const paragraphText = `I've been a member of Gymate for the past 6 months and it has
been an amazing experience. The trainers are knowledgeable and
supportive, the equipment is top-notch, and the community of
members is friendly and encouraging.`;

const Testimonials = () => {
  const ladyStyles = {
    position: "absolute",
    left: 0,
    bottom: 0,
    maxWidth: "35%",
    height: "30rem",
    borderTopRightRadius: "50%",
  };

  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <RedBgHeading text="TESTIMONIALS" width="15rem" />
      <div className="flex items-center justify-center max-w-6xl mt-40 border-8 border-gray-200 p-8">
        <div className="flex justify-end size-max p-8 bg-black text-white relative">
          <img src={testimonialNew} alt="" style={ladyStyles} />
          <div className="w-7/12 h-2/3 flex flex-col">
            <img src={quotes} alt="" className="size-16" />
            <q className="w-10/12 my-4 text-lg font-thin italic text-gray-300">
              {paragraphText}
            </q>
            <h1 className="text-2xl font-semibold">Harry Potter</h1>
            <p className="font-thin text-sm">CEO of Hogwarts</p>
          </div>
          <div className="absolute bottom-6 right-6 flex justify-center gap-2">
            <ArrowRedBtn className />
            <ArrowRedBtn additionalClassName="transform rotate-180" />
          </div>
        </div>
      </div>
      <LogoContainer />
      <hr className="border-t border-gray-300 w-full" />
    </div>
  );
};

export default Testimonials;
