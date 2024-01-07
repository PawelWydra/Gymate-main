import "./classes.css";
import redBg from "../../images/choose-us/title-bg.svg";
import GridItem from "./grid-item/grid-item";
import cycling from "../../images/classes/cycling.jpg";
import karate from "../../images/classes/karate.jpg";
import powerLifting from "../../images/classes/powerlifting.jpg";
import meditation from "../../images/classes/meditation.jpg";
import mma from "../../images/classes/mma.jpg";
import workout from "../../images/classes/workout.jpg";

const gridItems = [
  ["Cycling", "Wednesday: 9:00am-10:00am", cycling],
  ["Karate", "Friday: 10:00am-11:00am", karate],
  ["Power", "Saturday: 9:00am-10:00am", powerLifting],
  ["Meditation", "Friday: 1:00pm-2:00pm", meditation],
  ["Martial Arts", "Sunday: 6:00pm-7:00pm", mma],
  ["Workout", "Monday: 4:00pm-5:00pm", workout],
];

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
          {gridItems.map(([activity, time, backgroundImage], index) => (
            <GridItem
              key={index}
              activity={activity}
              time={time}
              backgroundImage={backgroundImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Classes;
