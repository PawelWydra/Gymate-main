import { FaArrowRight } from "react-icons/fa6";

function BtnWithRedArrow(props) {
  const buttonClasses = `flex items-center justify-center gap-2 font-bold text-sm w-48 h-12 ${
    props.bgColor || "bg-white"
  }`;
  const textStyle = { color: props.textColor || "black" };
  const arrowStyle = { color: props.arrowColor || "red" };

  return (
    <button className={buttonClasses}>
      <span style={textStyle}>{props.text}</span>
      <FaArrowRight style={arrowStyle} />
    </button>
  );
}

export default BtnWithRedArrow;
