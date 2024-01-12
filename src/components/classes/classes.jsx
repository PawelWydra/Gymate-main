import "./classes.css";
import GridItem from "./grid-item/grid-item";
import gridItems from "./classes-data.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";

function Classes() {
  return (
    <div className="classes-main-wrapper">
      <div className="classes-container">
        <div className="classes-featured">
          <RedBgHeading text={"OUR FEATURED CLASS"} />
        </div>
        <h1>We Are Offering Best Flexible Classes</h1>
        <div className="classes-image-grid">
          {Object.keys(gridItems).map((key, index) => {
            const { name, schedule, image, icon } = gridItems[key];
            return (
              <GridItem
                key={index}
                activity={name}
                time={schedule}
                backgroundImage={image}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Classes;
