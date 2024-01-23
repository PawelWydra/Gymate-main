import background from "../../assets/images/bmi/background.jpg";
import BmiCalculator from "./bmiCalculator/bmiCalculator";

function Bmi() {
  const bmiContainerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  return (
    <div
      className=""
      style={bmiContainerStyle}
    >
      <div className="max-w-[1800px] mx-auto py-14 px-4 md:px-16 lg:px-20 xl:px-32 2xl:px-64 3xl:px-80">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-5xl font-semibold">
            Let's Calculate Your <span className="text-red-500">BMI</span>
          </h1>
          <p className="w-3/4 text-lg">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <BmiCalculator />
        </div>
      </div>
    </div>
  );
}

export default Bmi;
