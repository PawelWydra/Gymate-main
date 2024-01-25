import cycling from "../../assets/images/classes/cycling.jpg";
import karate from "../../assets/images/classes/karate.jpg";
import powerLifting from "../../assets/images/classes/powerlifting.jpg";
import meditation from "../../assets/images/classes/meditation.jpg";
import mma from "../../assets/images/classes/mma.jpg";
import workout from "../../assets/images/classes/workout.jpg";
import bikeIcon from "../../assets/images/features/bike-red.png";
import karateIcon from "../../assets/images/features/karate-red.png";
import dumbbellIcon from "../../assets/images/features/dumb-red.png";
import meditationIcon from "../../assets/images/features/yoga-red.png";
import mmaIcon from "../../assets/images/features/boxer-red.png";
import workoutIcon from "../../assets/images/features/workout-red.png";

const gridItems = {
  cycling: {
    name: "Cycling",
    schedule: "Wednesday: 9:00am-10:00am",
    image: cycling,
    icon: bikeIcon,
  },
  karate: {
    name: "Karate",
    schedule: "Friday: 10:00am-11:00am",
    image: karate,
    icon: karateIcon,
  },
  powerLifting: {
    name: "Power",
    schedule: "Saturday: 9:00am-10:00am",
    image: powerLifting,
    icon: dumbbellIcon,
  },
  meditation: {
    name: "Meditation",
    schedule: "Friday: 1:00pm-2:00pm",
    image: meditation,
    icon: meditationIcon,
  },
  mma: {
    name: "Martial Arts",
    schedule: "Sunday: 6:00pm-7:00pm",
    image: mma,
    icon: mmaIcon,
  },
  workout: {
    name: "Workout",
    schedule: "Monday: 4:00pm-5:00pm",
    image: workout,
    icon: workoutIcon,
  },
};

export default gridItems;
