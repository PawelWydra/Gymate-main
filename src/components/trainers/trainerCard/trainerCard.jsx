import trainerBg from "../../../assets/images/trainers/trainer-bg.png";
import AnimatedSpan from "./animatedSpan/animatedSpan.jsx";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import shape from "../../../assets/images/trainers/shape.png";
import { IoIosArrowUp } from "react-icons/io";

function TrainerCard({ trainer, name, specialization }) {
  const trainerClasses = `
    absolute left-12 top-0 z-1
    w-56 grayscale duration-300 ease-in-out hover:grayscale-0
  `;

  return (
    <div className="flex flex-col justify-center items-center w-[20rem] h-96 mb-5 group">
      <div className="relative h-72 w-full overflow-hidden">
        <img src={trainerBg} alt="" className="absolute h-96 w-full" />
        <img src={trainer} alt="" className={trainerClasses} />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-40 gap-2 bg-white shadow-lg shadow-black/20 relative">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-center max-w-md text-gray-500">{specialization}</p>
        <div className="flex gap-5 text-gray-500">
          <FaFacebookF className="w-4 h-4" />
          <FaInstagram className="w-4 h-4" />
          <RiTwitterXLine className="w-4 h-4" />
          <AiOutlineMail className="w-4 h-4" />
        </div>
        <img src={shape} alt="" className="absolute bottom-32 h-8" />
        <IoIosArrowUp className="absolute bottom-32 text-2xl" />
        <AnimatedSpan />
      </div>
    </div>
  );
}

export default TrainerCard;
