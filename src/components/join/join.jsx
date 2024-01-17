import "./join.css";
import BtnWithRightArrow from '../title/btnWithRedArrow/btnWithRedArrow.jsx';

function Join() {
  return (
    <div className="join-container">
      <div className="join-wrapper">
        <div className="text-4xl font-semibold w-3/5">
          <h1 className="ml-10">
            We Are Always Providing Best
            <br /> Fitness Service For You
          </h1>
        </div>
        <BtnWithRightArrow text={"JOIN WITH US"} />
      </div>
    </div>
  );
}

export default Join;
