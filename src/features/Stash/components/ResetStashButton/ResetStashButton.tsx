import { FunctionComponent } from "react";
import styles from "./ResetStashButton.module.css";

const ResetStashButton: FunctionComponent = () => {
  const resetHideOut = () => {
    localStorage.clear();
    window.location.reload(); // TODO: rework this so we clear the HideOutData only
  };

  return (
    <button className={styles["reset-button"]} onClick={resetHideOut}>
      Reset Stash
    </button>
  );
};

export default ResetStashButton;
