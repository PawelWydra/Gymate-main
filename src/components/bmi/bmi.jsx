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
      className="flex px-8 md:px-16 lg:px-36 xl:px-80 2xl:px-[32rem] 3xl:px-[36rem]"
      style={bmiContainerStyle}
    >
      <div className="flex justify-center items-center">
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
