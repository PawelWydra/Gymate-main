import BtnWithRightArrow from "../title/btnWithRedArrow/btnWithRedArrow.jsx";
import SectionContainer from "../sectionContainer/sectionContainer";
import bg from "../../assets/images/features/cta-bg.png";

function Join() {
  return (
    <SectionContainer bg={bg}>
      <div className="flex flex-wrap items-center min-h-28 gap-5 lg:gap-0">
        <div className="flex-[1_3_0%] text-center text-2xl sm:text-3xl lg:text-4xl font-semibold min-w-fit">
          <h1 className="">
            We Are Always Providing Best
            <br /> Fitness Service For You
          </h1>
        </div>
        <div className="flex-[1_2] min-w-80 flex justify-center"> <BtnWithRightArrow text={"JOIN WITH US"} /></div>
       
      </div>
    </SectionContainer>
  );
}

export default Join;
