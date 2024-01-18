import "./app.css";
import Blog from "./components/blog/blog";
import Bmi from "./components/bmi/bmi";
import ChooseUs from "./components/choose-us/chooseUs";
import Classes from "./components/classes/classes";
import Gallery from "./components/gallery/gallery";
import Introduce from "./components/introduce/introduce.jsx";
import Join from "./components/join/join";
import Navbar from "./components/navbar/navbar.jsx";
import Pricing from "./components/pricing/pricing";
import Title from "./components/title/title.jsx";
import TrainersAndTestimonials from "./components/trainers/trainers";

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Title />
      <Introduce />
      <Classes />
      <Join />
      <ChooseUs />
      <TrainersAndTestimonials />
      <Gallery />
      <Bmi />
      <Pricing />
      <Blog />
      <section>advertisment</section>
      <section>footer</section>
    </div>
  );
}

export default App;
