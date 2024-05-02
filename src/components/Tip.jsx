import styles from "../styles/Tip.module.css";
import PropTypes from "prop-types";

const Tip = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.tip}>
      <img src={imgSrc} alt={`${title} illustration`} className={styles.icon} />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Tip;

Tip.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
