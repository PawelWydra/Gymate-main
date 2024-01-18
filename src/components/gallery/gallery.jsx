import boxingGirl from "../../images/gallery/img1.jpg";
import barbleGirl from "../../images/gallery/img2.jpg";
import linesGirl from "../../images/gallery/img3.jpg";
import absGuy from "../../images/gallery/img4.jpg";
import plankGirl from "../../images/gallery/img5.jpg";
import RedBgHeading from "../title/redBgHeading/redBgHeading";

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
    <div className="w-full flex flex-col items-center bg-white p-36">
      <div className="max-w-6xl flex flex-col items-center gap-6">
        <RedBgHeading text={"GYM GALLERY"} />
        <h1 className="text-4xl font-semibold text-black">
          Our Workplace Gallery
        </h1>
        <p className="w-8/12 text-gray-500 text-center">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases the company's work
          atmosphere.
        </p>
        <div
          className="w-full grid grid-rows-2 grid-cols-4 gap-2"
          style={{ height: "40rem" }}
        >
          <div className="col-span-2 row-span-2" style={boxingGirlStyle}></div>
          <div className="col-span-2" style={barbleGirlStyle}></div>
          <div className="col-span-2 row-span-2" style={plankGirlStyle}></div>
          <div className="h-48" style={linesGirlStyle}></div>
          <div className="" style={absGuyStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;