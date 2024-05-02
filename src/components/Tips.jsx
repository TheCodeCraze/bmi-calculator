import styles from "../styles/Tips.module.css";
import { tips } from "../data";
import Tip from "./Tip";

const Tips = () => {
  return (
    <section className={styles.container}>
      <div className={styles.tips}>
        <div className={styles.content}>
          {tips.map((tip) => (
            <Tip key={tip.id} {...tip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
