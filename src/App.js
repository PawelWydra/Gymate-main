import "./app.css";
import ChooseUs from "./components/choose-us/chooseUs";
import Classes from "./components/classes/classes";
import Introduce from "./components/introduce/introduce.jsx";
import Join from "./components/join/join";
import Navbar from "./components/navbar/navbar.jsx";
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
      <section>GALLERY</section>
      <section>BMI</section>
      <section>Pricing</section>
      <section>BLOG</section>
      <section>advertisment</section>
      <section>footer</section>
    </div>
  );
}

export default App;
