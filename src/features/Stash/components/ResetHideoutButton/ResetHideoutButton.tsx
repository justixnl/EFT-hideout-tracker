import { FunctionComponent } from "react";
import styles from "./ResetHideoutButton.module.css";

const ResetHideoutButton: FunctionComponent = () => {
  const resetHideOut = () => {
    if (confirm("Are you sure you want to reset Hideout? This will delete all data including stash!")) {
      localStorage.removeItem("hideoutData");
      localStorage.removeItem("stashData");
      window.location.reload(); // TODO: rework this so we clear the HideOutData only
    }
  };

  return (
    <button className={styles["reset-button"]} onClick={resetHideOut}>
      Reset Hideout
    </button>
  );
};

export default ResetHideoutButton;
