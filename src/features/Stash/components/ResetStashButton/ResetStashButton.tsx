import { FunctionComponent } from "react";
import styles from "./ResetStashButton.module.css";

const ResetStashButton: FunctionComponent = () => {
  const resetStash = () => {
    if (confirm("Are you sure you want to reset Stash?")) {
      localStorage.removeItem("stashData");
    }
  };

  return (
    <button className={styles["reset-button"]} onClick={resetStash}>
      Reset Stash
    </button>
  );
};

export default ResetStashButton;
