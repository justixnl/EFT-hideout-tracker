import { FunctionComponent } from "react";
import styles from "./Stash.module.css";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
}

const Stash: FunctionComponent<Props> = ({ setStashVisibility }) => {
  /*
      Reminder using:
      () => setStashVisibility(false)
      in the render will create a new function every time (Because its an arrow function) , which ends up causing unneeded re-renders.
  
  */
  const stashVisibilityHandler = () => {
    setStashVisibility(false);
  };

  return (
    <aside className={styles["stash-container"]}>
      <div className="stash-container_header">
        <button onClick={stashVisibilityHandler}> Close (arrow)</button>
        <div className="stash-container_reset-buttons">
          <button>Reset Hideout</button>
          <button>Reset Stash</button>
        </div>
      </div>
      <div className="stash-container_content">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "8px" }}>Roebles:</div>
          <input className={styles["stash-container_input"]} type="number" min="0" />
        </div>
      </div>
    </aside>
  );
};

export default Stash;

/*
<aside className="aside-container">
      <div>
        <div style={{ display: "flex", alignItems: "start", marginBottom: "8px" }}>&rarr;</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "8px" }}>
          <h3>Inventory</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "8px" }}>Roebles:</div>
          <input className="aside-container_input" type="number" min="0" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "8px" }}>Spark Plug:</div>
          <input className="aside-container_input" type="number" min="0" />
        </div>
      </div>
    </aside>
*/
