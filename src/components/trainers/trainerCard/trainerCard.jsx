import trainerBg from "../../../images/trainers/trainer-bg.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

function TrainerCard({ trainer, name, specialization }) {
  const trainerClasses = `
    absolute left-12 top-0 z-1
    w-56 grayscale duration-300 ease-in-out hover:grayscale-0
  `;

  return (
    <div className="flex flex-col justify-center items-center h-96 mb-5 group">
      <div className="relative h-72 w-80 overflow-hidden">
        <img src={trainerBg} alt="" className="absolute top-12" />
        <img src={trainer} alt="" className={trainerClasses} />
      </div>
      <div className="flex flex-col justify-center items-center w-80 h-40 gap-2 shadow-lg shadow-black/20">
        <h2 className="text-2xl font-semibold mt-auto">{name}</h2>
        <p className="text-center max-w-md text-gray-500">{specialization}</p>
        <div className="flex gap-5 text-gray-500">
          <FaFacebookF className="w-4 h-4" />
          <FaInstagram className="w-4 h-4" />
          <RiTwitterXLine className="w-4 h-4" />
          <AiOutlineMail className="w-4 h-4" />
        </div>
        <span className="bg-red-500 h-1 w-10 mt-auto group-hover:w-full transition-all duration-700"></span>
      </div>
    </div>
  );
}

export default TrainerCard;
