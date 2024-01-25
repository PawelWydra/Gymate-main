import { FaArrowRight } from "react-icons/fa6";

function BtnWithRedArrow(props) {
  const buttonClasses = `flex items-center justify-center gap-2 font-bold text-sm min-w-36 max-w-fit h-12 p-5 ${
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
