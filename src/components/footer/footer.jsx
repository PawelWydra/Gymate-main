import SectionContainer from "../sectionContainer/sectionContainer.jsx";
import logo from "../../assets/images/logo/logo-footer.svg";
import SocialIcon from "./socialIcon/socialIcon.jsx";
import { socialIcons, paragraph } from "./footerData.jsx";

function Footer() {
  return (
    <SectionContainer bg="#fff">
      <div className="flex flex-col md:flex-row gap-10 text-gray-500 tracking-wide font-sans">
        <div className="flex flex-col gap-6 basis-1/2 ">
          <img className="w-1/2 lg:w-1/3" src={logo} alt="" />
          <p className="md:max-w-[25rem]">{paragraph}</p>
          <div className="flex gap-4">
            {socialIcons.map((socialIcon, index) => (
              <SocialIcon key={index} icon={socialIcon.icon} />
            ))}
          </div>
          <div className="dec">
            {" "}
            <p className="rights">Privacy Policy | © 2024 Gymate</p>
            <p className="rights">Design by RadiusTheme</p>
          </div>
        </div>
        <div className="basis-1/4">
          <h1></h1>
          <span></span>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="basis-1/4">
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
