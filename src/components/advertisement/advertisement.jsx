import BtnWithRightArrow from "../title/btnWithRedArrow/btnWithRedArrow.jsx";
import SectionContainer from "../sectionContainer/sectionContainer";
import bg from "../../assets/images/call/background.jpg";

function Advertisement() {
  return (
    <SectionContainer bg={bg}>
      <div className="flex justify-around items-center max-w-5xl min-h-28">
        <div className="text-xl sm:text-3xl lg:text-4xl font-semibold">
          <h1 className="">
            We Are Always Providing Best
            <br /> Fitness Service For You
          </h1>
        </div>
        <BtnWithRightArrow text={"JOIN WITH US"} />
      </div>
    </SectionContainer>
  );
}

export default Advertisement;
