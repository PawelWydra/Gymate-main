import boxingGirl from "../../assets/images/gallery/img1.jpg";
import barbleGirl from "../../assets/images/gallery/img2.jpg";
import linesGirl from "../../assets/images/gallery/img3.jpg";
import absGuy from "../../assets/images/gallery/img4.jpg";
import plankGirl from "../../assets/images/gallery/img5.jpg";import SectionContainer from "../sectionContainer/sectionContainer";
import RedBgHeading from "../title/redBgHeading/redBgHeading";
import { motion } from "framer-motion";

function Gallery() {
  const boxingGirlStyle = {
    backgroundImage: `url(${boxingGirl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const barbleGirlStyle = {
    backgroundImage: `url(${barbleGirl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const linesGirlStyle = {
    backgroundImage: `url(${linesGirl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const absGuyStyle = {
    backgroundImage: `url(${absGuy})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const plankGirlStyle = {
    backgroundImage: `url(${plankGirl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <SectionContainer bg="#fff">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="flex flex-col justify-between items-center gap-6">
        <RedBgHeading text={"GYM GALLERY"} />
        <h1 className="text-4xl font-semibold text-black">
          Our Workplace Gallery
        </h1>
        <p className="w-8/12 text-gray-500 text-center">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases the company's work
          atmosphere.
        </p>
          <div className="w-full h-[40rem] grid grid-rows-2 grid-cols-4 gap-2">
            <div
              className="col-span-2 row-span-2"
              style={boxingGirlStyle}
            ></div>
            <div className="col-span-2" style={barbleGirlStyle}></div>
            <div className="col-span-2 row-span-2" style={plankGirlStyle}></div>
            <div className="h-48" style={linesGirlStyle}></div>
            <div className="" style={absGuyStyle}></div>
          </div>
      </div>
    </SectionContainer>
  );
}

export default Gallery;
