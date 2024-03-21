import { FunctionComponent } from "react";
// import { NavLink } from "react-router-dom"; // for Future use
import styles from "./NavigationBar.module.css";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
}

const NavigationBar: FunctionComponent<Props> = ({ setStashVisibility }) => {
  const stashVisibilityHandler = () => {
    setStashVisibility(true);
  };

  return (
    <nav className={styles["navigation-bar"]}>
      <div></div>
      <div>Escape From Tarkov - Hideout Tracker</div>

      <button className={styles["navigation-menu"]} onClick={stashVisibilityHandler}>
        ☰
      </button>
    </nav>
  );
};

export default NavigationBar;
