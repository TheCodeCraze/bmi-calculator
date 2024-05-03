import styles from "../styles/Limitations.module.css";
import { limitations } from "../data";
import Card from "./Card";

const Limitations = () => {
  return (
    <section className={styles.limitations}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>Limitations of BMI</h2>
          <p className={styles.description}>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className={styles.cards}>
          {limitations.map((limitation) => (
            <Card key={limitation.id} {...limitation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Limitations;
