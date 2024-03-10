import { FunctionComponent } from "react";
// import { NavLink } from "react-router-dom"; // for Future use
import styles from "./NavigationBar.module.css";
import ResetButton from "../../features/HideoutTracker/components/ResetButton/ResetButton";

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

      {/* TODO: Rework CSS */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ResetButton />
        <button onClick={stashVisibilityHandler}>Stash</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
