import RedBgHeading from "../title/redBgHeading/redBgHeading";
import backGroundPricing from "../../images/pricing/background.jpg";


function Pricing() {
  const bgContainer = {
    backgroundImage: `url(${backGroundPricing})`,
  };

  return (
    <div
      className="w-full flex flex-col items-center py-16"
      style={bgContainer}
    >
      <div className="w-10/12 flex flex-col items-center gap-6">
        <RedBgHeading text={"PRICING CHART"} />
        <h1 className="text-4xl font-semibold text-black">
          Exclusive Pricing Plan
        </h1>
        <p className="lg:w-4/12 text-gray-500 text-center">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="w-9/12">
         
        </div>
      </div>
    </div>
  );
}

export default Pricing;
