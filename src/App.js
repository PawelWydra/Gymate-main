import "./app.css";
import Introduce from "./components/introduce/introduce.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Title from "./components/title/title.jsx";

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Title />
      <Introduce />
      <section>classes</section>
      <section>join div</section>
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
