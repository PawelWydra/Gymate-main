import RedBgHeading from "../title/redBgHeading/redBgHeading";
import BtnWithRedArrow from "../title/btnWithRedArrow/btnWithRedArrow.jsx";

function Blog() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-24">
      <div className="max-w-6xl flex flex-col items-center gap-6">
        <RedBgHeading text={"LATEST BLOG"} />
        <h1 className="text-4xl font-semibold text-black">Our Recent News</h1>
        <p className=" text-gray-500 text-center">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="flex flex-col w-full px-20 lg:p-0 md:flex-row gap-6">
          <div className="w-1/3 min-h-80 shadow-2xl text-black">
            <div className="data-div">
              <h3>22.03.2022</h3>
            </div>
            <h2>Yoga For Everyone in 2023</h2>
            <p>
              This is program designed to make the practice of yoga beneficial
              for people of all ages, abilities, and backgrounds.
            </p>
            <BtnWithRedArrow
              text="PURCHASE NOW"
              bgColor="bg-red-500"
              textColor="white"
              arrowColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
