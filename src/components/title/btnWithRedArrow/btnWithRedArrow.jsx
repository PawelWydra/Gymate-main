import { FaArrowRight } from "react-icons/fa6";

function BtnWithRedArrow(props) {
  return (
    <button className="bg-white flex items-center justify-center gap-2 text-black font-bold text-base w-48 h-12">
      {props.text} <FaArrowRight style={{ color: "red" }} />
    </button>
  );
}

export default BtnWithRedArrow;
