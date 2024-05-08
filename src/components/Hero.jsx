import styles from "../styles/Hero.module.css";
import Calculator from "./Calculator";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["text-content"]}>
        <img src="/logo.svg" alt="Home" className={styles.logo} />
        <div className={styles.text}>
          <h1 className={styles.title}>Body Mass Index Calculator</h1>
          <p className={styles.description}>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
      <Calculator />
    </section>
  );
};

export default Hero;
