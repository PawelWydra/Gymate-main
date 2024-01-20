import background from "../../assets/images/bmi/background.jpg";
import BmiCalculator from "./bmiCalculator/bmiCalculator";

function Bmi() {
  const bmiContainerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    height: "26rem",
  };

  return (
    <div
      className="w-full flex flex-col items-center px-4 lg:px-36"
      style={bmiContainerStyle}
    >
      <div className="max-w-5xl size-full">
        <div className="lg:w-2/3 h-full flex flex-col justify-center gap-5">
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
