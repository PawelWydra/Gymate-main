import BtnWithRedArrow from "../../title/btnWithRedArrow/btnWithRedArrow.jsx";

function BlogCard() {
  return (
    <div className="w-1/3 p-8 flex flex-col gap-4 shadow-2xl text-black">
      <div className="data-div">
        <h3>22.03.2022</h3>
      </div>
      <h2 className="text-2xl font-semibold text-pretty">Yoga For Everyone in 2023</h2>
      <p>
        This is program designed to make the practice of yoga beneficial for
        people of all ages, abilities, and backgrounds.
      </p>
      <BtnWithRedArrow
        text="PURCHASE NOW"
        bgColor="bg-red-500"
        textColor="white"
        arrowColor="white"
      />
    </div>
  );
}

export default BlogCard;
