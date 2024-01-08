import "./join.css";
import { FaArrowRight } from "react-icons/fa6";

const iconStyle = {
  color: "#ff0000",
};

function Join() {
  return (
    <div className="join-container">
      <div className="join-wrapper">
        <div className="join-heading">
          <h1>
            We Are Always Providing Best
            <br /> Fitness Service For You
          </h1>
        </div>
        <button className="join-btn">
          JOIN WITH US <FaArrowRight style={iconStyle} />
        </button>
      </div>
    </div>
  );
}

export default Join;
