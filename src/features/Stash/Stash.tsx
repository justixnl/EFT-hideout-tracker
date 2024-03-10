/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import styles from "./Stash.module.css";

// Components
import CloseButton from "./components/CloseButton/CloseButton";
import ResetStashButton from "./components/ResetStashButton/ResetStashButton";
import ResetHideoutButton from "./components/ResetHideoutButton/ResetHideoutButton";
import StashInput from "./components/StashInput/StashInput";
import { InventoryDataItem } from "../../infrastructure/Layouts/RootLayout";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
  stashInventory: InventoryDataItem[];
}

const Stash: FunctionComponent<Props> = ({ stashInventory, setStashVisibility }) => {
  return (
    <aside className={styles["stash-container"]}>
      <div className="stash-container_header">
        <CloseButton setStashVisibility={setStashVisibility} />
        <h2>Hideout Options</h2>
        <div className={styles["stash-container_reset-buttons"]}>
          {/* TODO: Add a distinct visual styling (icon?) to each buttons */}
          <ResetHideoutButton />
          <ResetStashButton />
        </div>
      </div>

      <div className="stash-container_content">
        <h3>Stash Inventory</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {stashInventory.map((item: InventoryDataItem) => (
            <StashInput item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Stash;
