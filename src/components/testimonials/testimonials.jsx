import RedBgHeading from "../title/redBgHeading/redBgHeading";
import quotes from "../../assets/images/testimonials/quotes.png";
import testimonialNew from "../../assets/images/testimonials/testimonial-new.jpg";
import ArrowRedBtn from "./arrowRedBtn/arrowRedBtn";
import LogoContainer from "./logoContainer/logoContainer";

const paragraphText = `I've been a member of Gymate for the past 6 months and it has
been an amazing experience. The trainers are knowledgeable and
supportive, the equipment is top-notch, and the community of
members is friendly and encouraging.`;

const Testimonials = () => {

  return (
    <div className="flex flex-col items-center mt-10">
      <RedBgHeading text="TESTIMONIALS" width="15rem" />
      <div className="flex mt-8 md:mt-16 xl:mt-40 2xl:mt-48 border-8 border-gray-200 p-8">
        <div className="flex justify-end p-8 bg-black text-white relative">
          <img
            className="hidden lg:block absolute left-0 bottom-0 rounded-tr-[50%] min-h-[30rem] 2xl:max-h-[35rem] w-5/12"
            src={testimonialNew}
            alt=""
          />
          <div className="lg:w-6/12 h-2/3 flex flex-col">
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
    </div>
  );
};

export default Testimonials;
