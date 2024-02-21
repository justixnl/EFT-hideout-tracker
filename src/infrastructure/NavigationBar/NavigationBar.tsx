import { FunctionComponent } from "react";
// import { NavLink } from "react-router-dom"; // for Future use
import styles from "./NavigationBar.module.css";

const NavigationBar: FunctionComponent = () => (
  <nav className={styles["navigation-bar"]}>Escape From Tarkov - Hideout Tracker</nav>
);

export default NavigationBar;
