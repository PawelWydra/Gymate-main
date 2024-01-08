import "./join.css";
import { FaArrowRight } from "react-icons/fa6";

function Join() {
  return (
    <div className="join-container">
      <div className="join-heading">
        <h1>We Are Always Providing Best Fitness Service For You</h1>
      </div>
      <button className="join-btn">
        JOIN WITH US <FaArrowRight />
      </button>
    </div>
  );
}

export default Join;
