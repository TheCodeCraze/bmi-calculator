import styles from "../styles/Card.module.css";
import PropTypes from "prop-types";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <img
          src={imgSrc}
          alt={`${title} illustration`}
          className={styles.icon}
        />
        <h3 className={styles.text}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
