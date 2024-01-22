import "./classes.css";
import GridItem from "./grid-item/grid-item";
import gridItems from "./classes-data.jsx";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import SectionContainer from "../sectionContainer/sectionContainer";

function Classes() {
  return (
    <SectionContainer bg="#fff">
      <div className="flex flex-col items-center text-black text-balance">
        <RedBgHeading text={"OUR FEATURED CLASS"} width="20rem" />
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold my-6 mx-auto">
          We Are Offering Best Flexible Classes
        </h1>
      </div>
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
    </SectionContainer>
  );
}

export default Classes;
