import { FunctionComponent } from "react";
// import { NavLink } from "react-router-dom"; // for Future use
import styles from "./NavigationBar.module.css";
import ResetButton from "../../features/HideoutTracker/components/ResetButton/ResetButton";

const NavigationBar: FunctionComponent = () => (
  <nav className={styles["navigation-bar"]}>
    <div></div>
    <div>Escape From Tarkov - Hideout Tracker</div>
    <ResetButton />
  </nav>
);

export default NavigationBar;
