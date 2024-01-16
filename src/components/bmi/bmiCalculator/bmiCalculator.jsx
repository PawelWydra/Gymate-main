import React, { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Assuming the input is in cm

    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const calculatedBmi = weightNum / (heightNum * heightNum);
      setBmi(calculatedBmi.toFixed(2));

      // Determine BMI category
      if (calculatedBmi < 18.5) {
        setBmiCategory("Underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setBmiCategory("Normal Weight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setBmiCategory("Overweight");
      } else {
        setBmiCategory("Obese");
      }
    } else {
      // Handle invalid input
      setBmi(null);
      setBmiCategory("");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-4/5">
      <input
        type="text"
        placeholder="Weight / kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="p-3 bg-transparent border-2 border-gray-400"
      />
      <input
        type="text"
        placeholder="Height / cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="p-3 bg-transparent border-2 border-gray-400"
      />
      <span>Your BMI is: {bmi}</span>
      <span>
        Your BMI Category is:{" "}
        <span
          className={
            bmiCategory === "Normal Weight" ? "text-green-500" : "text-red-500"
          }
        >
          {bmiCategory}
        </span>
      </span>

      <button
        className="bg-gray-600 text-white py-3 mt-4 w-40 font-semibold text-md"
        onClick={calculateBmi}
      >
        CALCULATE
      </button>
    </div>
  );
}

export default BmiCalculator;
