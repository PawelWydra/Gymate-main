import RedBgHeading from "../title/redBgHeading/redBgHeading";
import PricingCard from "./pricingCard/pricingCard.jsx";
import pricingBg from "../../assets/images/pricing/background.jpg";
import img1 from "../../assets/images/pricing/img1.jpg";
import img2 from "../../assets/images/pricing/img2.jpg";
import img3 from "../../assets/images/pricing/img3.jpg";

const pricingData = [
  { imgSrc: img1, title: "Beginner", price: "39" },
  { imgSrc: img2, title: "Intermediate", price: "45" },
  { imgSrc: img3, title: "Advance", price: "60" },
];

function Pricing() {
  const pricingBgStyle = {
    backgroundImage: `url(${pricingBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full flex flex-col items-center bg-white py-8 lg:p-24"
      style={pricingBgStyle}
    >
      <div className="max-w-6xl flex flex-col items-center gap-6">
        <RedBgHeading text={"PRICING CHART"} />
        <h1 className="text-4xl font-semibold text-black">
          Exclusive Pricing Plan
        </h1>
        <p className="w-full lg:w-8/12 text-gray-500 text-center mb-10">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-6">
          {pricingData.map(({ imgSrc, title, price }, index) => (
            <PricingCard
              key={index}
              imgSrc={imgSrc}
              title={title}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
