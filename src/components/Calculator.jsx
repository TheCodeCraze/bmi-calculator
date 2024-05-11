import { useEffect, useReducer, useState } from "react";
import styles from "../styles/Calculator.module.css";
import Input from "./Input";
import {
  calculateMetricBmi,
  calculateImperialBmi,
  calculateWeightStatus,
} from "../utils/bmi";

const INITIAL_STATE = {
  metric: { cm: "", kg: "" },
  imperial: { ft: "", in: "", st: "", lbs: "" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "METRIC_INPUT": {
      const { name, value } = action.payload;
      return { ...state, metric: { ...state.metric, [name]: value } };
    }
    case "IMPERIAL_INPUT": {
      const { name, value } = action.payload;
      return { ...state, imperial: { ...state.imperial, [name]: value } };
    }
    case "RESET_INPUT":
      return {
        metric: { cm: "", kg: "" },
        imperial: { ft: "", in: "", st: "", lbs: "" },
      };
    default:
      return state;
  }
};

const Calculator = () => {
  const [unit, setUnit] = useState({ metric: true, imperial: false });
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [bmi, setBmi] = useState(null);
  const [weightStatus, setWeightStatus] = useState("");

  const handleRadio = (e) => {
    const { name, checked } = e.target;
    setUnit(
      name === "imperial"
        ? { metric: !checked, imperial: checked }
        : { metric: checked, imperial: !checked }
    );
    dispatch({ type: "RESET_INPUT" });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    unit.metric
      ? dispatch({ type: "METRIC_INPUT", payload: { name, value } })
      : dispatch({ type: "IMPERIAL_INPUT", payload: { name, value } });
  };

  useEffect(() => {
    const { metric, imperial } = state;

    if (unit.metric) {
      const values = Object.values(metric);
      const isValid = values.every(
        (item) => item !== "" && item.length > 1 && item.length < 4
      );
      isValid ? setBmi(calculateMetricBmi(metric)) : setBmi(null);
    } else {
      const values = Object.values(imperial);
      const isValid = values.every((item) => item !== "");
      isValid ? setBmi(calculateImperialBmi(imperial)) : setBmi(null);
    }
  }, [unit, state]);

  useEffect(() => {
    if (!bmi) return;

    calculateWeightStatus(+bmi, setWeightStatus);
  }, [bmi]);

  return (
    <form
      className={styles.calculator}
      style={{ top: bmi ? "166px" : "181px" }}
    >
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
      {unit.metric ? (
        <div className={styles["inputs-metric"]}>
          <div className={styles.height}>
            <label className={styles.label}>Height</label>
            <Input
              type="text"
              name="cm"
              placeholder="0"
              value={state.metric.cm}
              handleInput={handleInput}
              unit="cm"
            />
          </div>
          <div className={styles.weight}>
            <label className={styles.label}>Weight</label>
            <Input
              type="text"
              name="kg"
              placeholder="0"
              value={state.metric.kg}
              handleInput={handleInput}
              unit="kg"
            />
          </div>
        </div>
      ) : (
        <div className={styles["inputs-imperial"]}>
          <div className={styles.height}>
            <label className={styles.label}>Height</label>
            <div className={styles.group}>
              <Input
                type="text"
                name="ft"
                placeholder="0"
                value={state.imperial.ft}
                handleInput={handleInput}
                unit="ft"
              />
              <Input
                type="text"
                name="in"
                placeholder="0"
                value={state.imperial.in}
                handleInput={handleInput}
                unit="in"
              />
            </div>
          </div>
          <div className={styles.weight}>
            <label className={styles.label}>Weight</label>
            <div className={styles.group}>
              <Input
                type="text"
                name="st"
                placeholder="0"
                value={state.imperial.st}
                handleInput={handleInput}
                unit="st"
              />
              <Input
                type="text"
                name="lbs"
                placeholder="0"
                value={state.imperial.lbs}
                handleInput={handleInput}
                unit="lbs"
              />
            </div>
          </div>
        </div>
      )}
      {!bmi ? (
        <div className={`${styles.result} ${styles["result-empty"]}`}>
          <h2 className={styles.heading}>Welcome!</h2>
          <p className={styles.description}>
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      ) : (
        <div className={`${styles.result} ${styles["result-bmi"]}`}>
          <div className={styles.bmi}>
            <p className={styles.text}>Your BMI is...</p>
            <h3 className={styles.value}>{bmi}</h3>
          </div>
          <p className={styles.description}>
            Your BMI suggests you&apos;re {weightStatus}. Your ideal weight is
            between{" "}
            {unit.metric ? (
              <span>63.3kgs - 85.2kgs.</span>
            ) : (
              <span>9st 6lbs - 12st 10lbs.</span>
            )}
          </p>
        </div>
      )}
    </form>
  );
};

export default Calculator;
