import styles from "../styles/App.module.css";
import Hero from "./Hero";
import Info from "./Info";
import Tips from "./Tips";
import Limitations from "./Limitations";

const App = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <Info />
      <Tips />
      <Limitations />
    </main>
  );
};

export default App;
