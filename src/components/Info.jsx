import styles from "../styles/Info.module.css";

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.content}>
        <img
          src="/image-man-eating.webp"
          alt="Illustration of man eating"
          className={styles.image}
        />
        <div className={styles.text}>
          <h2 className={styles.title}>What your BMI result means</h2>
          <p className={styles.description}>
            A BMI range of 18.5 to 24.9 is considered a &#39;healthy
            weight.&#39; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
