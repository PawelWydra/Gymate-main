import BtnWithRedArrow from "../title/btnWithRedArrow/btnWithRedArrow.jsx";
import SectionContainer from "../sectionContainer/sectionContainer";
import bg from "../../assets/images/call/background.jpg";

function Advertisement() {
  return (
    <SectionContainer bg={bg}>
        <div className="text-4xl xl:text-5xl font-semibold py-5">
          <h1 className="">Need a Fitness Trainer? </h1>
          <h2 className="text-3xl my-2"><span className="text-red-500">Call:</span> +123-456789</h2>
          <div className="mt-10">
            <BtnWithRedArrow
              text="PURCHASE NOW"
              bgColor="bg-buttonColor"
              textColor="white"
              arrowColor="white"
            />
          </div>
        </div>
    </SectionContainer>
  );
}

export default Advertisement;
