import SectionContainer from "../sectionContainer/sectionContainer.jsx";
import logo from "../../assets/images/logo/logo-footer.svg";
import SocialIcon from "./socialIcon/socialIcon.jsx";
import { socialIcons, paragraph } from "./footerData.jsx";
import Section from "../animatedSection/animatedSection.jsx";

function Footer() {
  return (
    <SectionContainer bg="#fff">
      <Section>
      <div className="flex flex-col justify-between md:flex-row gap-10 text-gray-500 tracking-wide font-sans">
        <div className="flex flex-col items-center md:items-start gap-3 flex-[3_3] ">
          <img className="w-1/2 lg:w-1/3 min-w-[15rem]" src={logo} alt="" />
          <p className="max-w-[25rem]">{paragraph}</p>
          <div className="flex gap-4">
            {socialIcons.map((socialIcon, index) => (
              <SocialIcon key={index} icon={socialIcon.icon} />
            ))}
          </div>
          <div className="dec w-full flex flex-col items-center md:items-start">
            <p className="rights">Privacy Policy | © 2024 Gymate</p>
            <p className="rights">Design by RadiusTheme</p>
          </div>
        </div>
        <div className="min-h-60 flex-auto flex items-center md:items-start flex-col justify-between ">
          <div className="flex flex-col max-w-fit">
            <h1 className="text-2xl font-bold text-black">Our Classes </h1>
            <span className="bg-red-500 h-1 w-2/3 mb-auto" />
          </div>
          <a href="#">Fitness Classes</a>
          <a href="#">Aerobics Classes</a>
          <a href="#">Power Yoga</a>
          <a href="#">Learn Machines</a>
          <a href="#">Full-body Strength</a>
        </div>
        <div className="min-h-60 flex-auto flex items-center md:items-start flex-col justify-between ">
          <div className="flex flex-col max-w-fit">
            <h1 className="text-2xl font-bold text-black">Working Hours</h1>
            <span className="bg-red-500 h-1 w-2/3 mb-auto" />
          </div>
          <p className="font-bold">Monday - Friday:</p>
          <p>7:00am - 21:00pm</p>
          <p className="font-bold">Saturday:</p>
          <p>7:00am - 19:00pm</p>
          <p className="font-bold">Sunday - Closed</p>
        </div>
      </div>
      </Section>
    </SectionContainer>
  );
}

export default Footer;
