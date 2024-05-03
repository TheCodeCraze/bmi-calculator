import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
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
    </section>
  );
};

export default Hero;

// Enter your details below

// Metric
// Imperial

// Height
// Weight

// Your BMI is...

// <!-- add score -->

// Your BMI suggests you're <!-- add classification -->.
// Your ideal weight is between <!-- add range -->.
