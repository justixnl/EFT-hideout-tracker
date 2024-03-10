import { FunctionComponent } from "react";
import styles from "./ResetHideoutButton.module.css";

const ResetHideoutButton: FunctionComponent = () => {
  const resetHideOut = () => {
    localStorage.clear();
    window.location.reload(); // TODO: rework this so we clear the HideOutData only
  };

  return (
    <button className={styles["reset-button"]} onClick={resetHideOut}>
      Reset Hideout
    </button>
  );
};

export default ResetHideoutButton;
