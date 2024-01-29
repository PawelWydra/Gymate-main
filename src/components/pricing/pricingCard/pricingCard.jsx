import BtnWithRedArrow from "../../title/btnWithRedArrow/btnWithRedArrow";

function PricingCard({ imgSrc, title, price }) {
  const pricingParagraphs = [
    "Free Hand",
    "Gym Fitness",
    "Weight Loss",
    "Personal Trainer",
    "Cycling",
  ];

  return (
    <div className="shadow-2xl flex-1 min-w-80 max-w-[27rem]">
      <div className="relative group">
        <img
          src={imgSrc}
          alt=""
          className="w-full grayscale group-hover:grayscale-0 duration-300"
        />
        <div className="h-1/5 w-4/6 flex items-end justify-center bg-white absolute bottom-[-1px] left-1/2 transform -translate-x-1/2">
          <h2 className="text-2xl md:text-xl font-semibold text-black group-hover:text-red-500 duration-300">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 p-4 text-black bg-white">
        <h1 className="relative text-5xl font-bold font-sans mb-4">
          <span className="absolute top-0 right-16 text-3xl font-thin text-gray-400">
            $
          </span>
          {price}
          <span className="absolute top-5 left-16 text-2xl font-thin text-gray-400">
            p/m
          </span>
        </h1>{" "}
        {pricingParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-400 text-lg">
            {paragraph}
          </p>
        ))}
        <div className="my-5">
          <BtnWithRedArrow
            text="PURCHASE NOW"
            bgColor="bg-buttonColor"
            textColor="white"
            arrowColor="white"
          />
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
