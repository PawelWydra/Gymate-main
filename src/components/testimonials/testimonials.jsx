import RedBgHeading from "../title/redBgHeading/redBgHeading";

const paragraphText = `I've been a member of Gymate for the past 6 months and it has
been an amazing experience. The trainers are knowledgeable and
supportive, the equipment is top-notch, and the community of
members is friendly and encouraging.`;

function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <RedBgHeading text={"TESTIMONIALS"} width={"15rem"} />
      <div className="flex items-center justify-center size-10/12 border-8 border-gray-100 p-8">
        <div className="flex items-center justify-center size-max p-8 bg-black text-white">
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
