import { FunctionComponent } from "react";
import styles from "./CloseButton.module.css";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
}

const CloseButton: FunctionComponent<Props> = ({ setStashVisibility }) => {
  /*
      Reminder using:
      () => setStashVisibility(false)
      in the render will create a new function every time, which will end up causing unneeded re-renders.
      So use handlers as shown below instead.
  */
  const stashVisibilityHandler = () => {
    setStashVisibility(false);
  };

  return (
    <button className={styles["close-stash-button"]} onClick={stashVisibilityHandler}>
      ✖
    </button>
  );
};

export default CloseButton;
