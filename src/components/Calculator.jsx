import { useEffect, useState } from "react";
import styles from "../styles/Calculator.module.css";
import Input from "./Input";

const Calculator = () => {
  const [unit, setUnit] = useState({ metric: true, imperial: false });
  const [input, setInput] = useState({ height: "", weight: "" });
  const [bmi, setBmi] = useState(null);
  const [weightStatus, setWeightStatus] = useState("");

  const handleRadio = (e) => {
    const { name, checked } = e.target;
    setUnit(
      name === "imperial"
        ? { metric: !checked, imperial: checked }
        : { metric: checked, imperial: !checked }
    );
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const calculateBmi = (height, weight) => {
    const heightInM = height / 100;
    const result = weight / (heightInM * heightInM);
    setBmi(result.toFixed(1));
  };

  const calculateWeightStatus = (bmi) => {
    switch (true) {
      case bmi < 18.5:
        setWeightStatus("Underweight");
        return;
      case bmi > 18.5 && bmi < 24.9:
        setWeightStatus("Healthy Weight");
        return;
      case bmi > 25.0 && bmi < 29.9:
        setWeightStatus("Overweight");
        return;
      case bmi >= 30.0:
        setWeightStatus("Obesity");
        return;
      default:
        setWeightStatus("");
        return;
    }
  };

  useEffect(() => {
    if (
      !input.height ||
      !input.weight ||
      input.height.length < 2 ||
      input.weight.length < 2
    ) {
      setBmi(null);
      return;
    }

    calculateBmi(+input.height, +input.weight);
  }, [input.height, input.weight]);

  useEffect(() => {
    if (!bmi) return;

    calculateWeightStatus(+bmi);
  }, [bmi]);

  const resultClass = !bmi ? styles["result-empty"] : styles["result-bmi"];

  return (
    <form className={styles.calculator}>
      <label className={styles.heading}>Enter your details below</label>
      <div className={styles.unit}>
        <div className={styles.metric}>
          <input
            id="metric"
            type="radio"
            name="metric"
            className={styles.radio}
            checked={unit.metric}
            onChange={handleRadio}
          />
          <label htmlFor="metric" className={styles.label}>
            Metric
          </label>
        </div>
        <div className={styles.imperial}>
          <input
            id="imperial"
            type="radio"
            name="imperial"
            className={styles.radio}
            checked={unit.imperial}
            onChange={handleRadio}
          />
          <label htmlFor="imperial" className={styles.label}>
            Imperial
          </label>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.height}>
          <label htmlFor="height" className={styles.label}>
            Height
          </label>
          <Input
            id="height"
            type="text"
            name="height"
            placeholder="0"
            value={input.height}
            handleInput={handleInput}
            unit="cm"
          />
        </div>
        <div className={styles.weight}>
          <label htmlFor="weight" className={styles.label}>
            Weight
          </label>
          <Input
            id="weight"
            type="text"
            name="weight"
            placeholder="0"
            value={input.weight}
            handleInput={handleInput}
            unit="kg"
          />
        </div>
      </div>
      <div className={`${styles.result} ${resultClass}`}>
        {bmi ? (
          <>
            <div className={styles.bmi}>
              <p className={styles.text}>Your BMI is...</p>
              <h3 className={styles.value}>{bmi}</h3>
            </div>
            <p className={styles.description}>
              Your BMI suggests you&apos;re {weightStatus}. Your ideal weight is
              between <span>63.3kgs - 85.2kgs.</span>
            </p>
          </>
        ) : (
          <>
            <h3 className={styles.heading}>Welcome!</h3>
            <p className={styles.description}>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default Calculator;
