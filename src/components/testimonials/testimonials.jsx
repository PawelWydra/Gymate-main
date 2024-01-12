import RedBgHeading from "../title/redBgHeading/redBgHeading";

const paragraphText = `I've been a member of Gymate for the past 6 months and it has
been an amazing experience. The trainers are knowledgeable and
supportive, the equipment is top-notch, and the community of
members is friendly and encouraging.`;

function Testimonials() {
  return (
    <div className="main-container">
      <div className="h2-title">
        <RedBgHeading text={"TESTIMONIALS"} />
      </div>
      <div className="main-wrapper">
        <div className="context-wrapper">
          <img src="" alt="" className="grazka" />
          <div className="harry-potter-text">
            <img src="" alt="" className="cudzyslow" />
            <p>{paragraphText}</p>
            <h1>Harry Potter</h1>
            <p>CEO of Hogwarts</p>
          </div>
          <div className="arrow-btn-cnt">
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
