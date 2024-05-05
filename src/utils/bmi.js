export const calculateMetricBmi = ({ cm, kg }) => {
  const heightInM = +cm / 100;
  const result = +kg / (heightInM * heightInM);
  return result.toFixed(1);
};

export const calculateImperialBmi = (data) => {
  const weightInLbs = +data.lbs + +data.st * 14;
  const heightInInches = +data.in + +data.ft * 12;
  const result = 703 * (weightInLbs / (heightInInches * heightInInches));
  return result.toFixed(1);
};

export const calculateWeightStatus = (bmi, setWeightStatus) => {
  switch (true) {
    case bmi < 18.5:
      setWeightStatus("Underweight");
      break;
    case bmi > 18.5 && bmi < 24.9:
      setWeightStatus("Healthy Weight");
      break;
    case bmi > 25.0 && bmi < 29.9:
      setWeightStatus("Overweight");
      break;
    case bmi >= 30.0:
      setWeightStatus("Obesity");
      break;
    default:
      setWeightStatus("");
      break;
  }
};
