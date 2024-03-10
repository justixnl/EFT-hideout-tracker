import { FunctionComponent } from "react";
import styles from "./ResetButton.module.css";

interface Props {}

const PanelFooter: FunctionComponent<Props> = () => {
  const resetHideOut = () => {
    localStorage.clear();
    window.location.reload(); // TODO: rework this so we clear the HideOutData only
  };

  // TODO: REMOVE!
  console.warn("PanelFooter Rerendered!");

  return (
    <button className={styles["reset-button"]} onClick={resetHideOut}>
      Reset Hideout
    </button>
  );
};

export default PanelFooter;
