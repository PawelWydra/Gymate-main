import "./app.css";
import Classes from "./components/classes/classes";
import Introduce from "./components/introduce/introduce.jsx";
import Join from "./components/join/join";
import Navbar from "./components/navbar/navbar.jsx";
import Title from "./components/title/title.jsx";

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Title />
      <Introduce />
      <Classes />
      <Join />
      <section>choose us</section>
      <section>trainers</section>
      <section>TESTIMONIALS</section>
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
