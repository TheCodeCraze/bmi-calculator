import styles from "../styles/App.module.css";
import Info from "./Info";
import Tips from "./Tips";

const App = () => {
  return (
    <main className={styles.container}>
      <Info />
      <Tips />
    </main>
  );
};

export default App;
