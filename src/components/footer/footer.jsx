import SectionContainer from "../sectionContainer/sectionContainer.jsx";
import logo from "../../assets/images/logo/logo-footer.svg";
import SocialIcon from "./socialIcon/socialIcon.jsx";
import { socialIcons, paragraph } from "./footerData.jsx"

function Footer() {
  return (
    <SectionContainer bg="#fff">
      <div className="container text-black">
        <div className="flex flex-col gap-3 w-1/4">
          <img src={logo} alt="" />
          <p>{paragraph}</p>
          <div className="flex gap-2">
            {socialIcons.map((socialIcon, index) => (
              <SocialIcon key={index} icon={socialIcon.icon} />
            ))}
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
