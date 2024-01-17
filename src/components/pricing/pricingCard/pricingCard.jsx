import imgPricing from "../../images/pricing/img1.jpg";

function PricingCard() {
  return (
    <div className="card-pricing w-1/3">
      <img src={imgPricing} alt="" className="" />
      <div className="flex flex-col items-center gap-5 p-10 text-black bg-white">
        <h1 className="text-7xl font-bold">39</h1>{" "}
        <p className="text-gray-400 text-lg">Free Hand</p>
        <p className="text-gray-400 text-lg">Gym Fitness</p>
        <p className="text-gray-400 text-lg">Weight Loss</p>
        <p className="text-gray-400 text-lg">Personal Trainer</p>
        <p className="text-gray-400 text-lg">Cycling</p>
        <button>Purchase Now</button>
      </div>
    </div>
  );
}

export default PricingCard;
