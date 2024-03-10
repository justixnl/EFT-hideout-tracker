import { FunctionComponent } from "react";
import styles from "./Stash.module.css";

// Components
import CloseButton from "./components/CloseButton/CloseButton";
import ResetStashButton from "./components/ResetStashButton/ResetStashButton";
import ResetHideoutButton from "./components/ResetHideoutButton/ResetHideoutButton";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
}

const Stash: FunctionComponent<Props> = ({ setStashVisibility }) => {
  return (
    <aside className={styles["stash-container"]}>
      <div className="stash-container_header">
        <CloseButton setStashVisibility={setStashVisibility} />
        <h2>Hideout Options</h2>
        {/* <div style={{ borderTop: "1px solid #cdccc8", margin: "8px 0" }}></div> */}
        <div className={styles["stash-container_reset-buttons"]}>
          {/* TODO: Add a distinct visual styling (icon?) to each buttons */}
          <ResetHideoutButton />
          <ResetStashButton />
        </div>
      </div>

      <div className="stash-container_content">
        <h3>Stash Inventory</h3>
        {/*  TODO: Fix css */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Roebles:</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button className={styles["stash-container_increase-btn"]}>+5</button>
            <button className={styles["stash-container_increase-btn"]}>+10</button>
            <input className={styles["stash-container_input"]} type="number" min="0" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Stash;
