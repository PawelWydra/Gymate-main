import SectionContainer from "../sectionContainer/sectionContainer.jsx";
import logo from "../../assets/images/logo/logo-footer.svg";
import SocialIcon from "./socialIcon/socialIcon.jsx";
import {
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const socialIcons = [
  { icon: <FaFacebookF />, name: "Facebook" },
  { icon: <FaXTwitter />, name: "Twitter" },
  { icon: <FaPinterestP />, name: "Pinterest" },
  { icon: <FaYoutube />, name: "Youtube" },
];

const paragraph = `Take your health and body to the next level with our comprehensive
program designed to help you reach your fitness goals.`;

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
