import SectionContainer from "../sectionContainer/sectionContainer.jsx";
import logo from "../../assets/images/logo/logo-footer.svg";

const paragraph = `Take your health and body to the next level with our comprehensive
program designed to help you reach your fitness goals.`;

function Footer() {
  return (
    <SectionContainer bg="#fff">
      <div className="container text-black">
        <div className="flex flex-col gap-3 w-1/4">
          <img src={logo} alt="" />
          <p>{paragraph}</p>
          <div className="icon-container">
    
          </div>
          <span className="rights"></span>
          <span className="rights"></span>
        </div>
        <div className="item">
          <h1></h1>
          <span></span>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="item">
          <h1></h1>
          <span></span>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Footer;
