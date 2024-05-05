import styles from "../styles/Input.module.css";
import PropTypes from "prop-types";

const Input = ({ id, type, name, placeholder, value, handleInput, unit }) => {
  return (
    <div className={styles.group}>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
        className={styles.input}
      />
      <p className={styles.unit}>{unit}</p>
    </div>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
};
