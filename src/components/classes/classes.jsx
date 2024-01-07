import "./classes.css";
import redBg from "../../images/choose-us/title-bg.svg";
import GridItem from "./grid-item/grid-item";
import gridItems from "./classes-data.jsx";

function Classes() {
  return (
    <div className="classes-main-wrapper">
      <div className="classes-container">
        <div className="classes-featured">
          <img src={redBg} alt="Title" className="redBg" />
          <h3>OUR FEATURED CLASS</h3>
        </div>
        <h1>We Are Offering Best Flexible Classes</h1>
        <div className="classes-image-grid">
          {Object.keys(gridItems).map((key, index) => {
            const { name, schedule, image } = gridItems[key];
            return (
              <GridItem
                key={index}
                activity={name}
                time={schedule}
                backgroundImage={image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Classes;
