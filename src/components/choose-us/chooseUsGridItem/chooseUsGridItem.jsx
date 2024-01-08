import "./chooseUsGridItem.css";
import training from "../../../images/choose-us/training.png";

function ChooseUsGridItem() {
  return (
    <div className="chooseUs-grid-item">
      <div className="chooseUs-icon-container">
        <img src={training} alt="" />
      </div>
      <h3>Free Fitness Training</h3>
    </div>
  );
}

export default ChooseUsGridItem;
