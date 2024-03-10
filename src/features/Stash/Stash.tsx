/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useState } from "react";
import styles from "./Stash.module.css";

// Components
import CloseButton from "./components/CloseButton/CloseButton";
import ResetStashButton from "./components/ResetStashButton/ResetStashButton";
import ResetHideoutButton from "./components/ResetHideoutButton/ResetHideoutButton";
import StashInput from "./components/StashInput/StashInput";
import { InventoryDataItem } from "../../infrastructure/Layouts/RootLayout";
import classNames from "classnames";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
  stashInventory: InventoryDataItem[];
}

const Stash: FunctionComponent<Props> = ({ stashInventory, setStashVisibility }) => {
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);

  const closeSideBar = (setVisibility: boolean) => {
    setCloseAnimation(true);

    setTimeout(() => {
      setCloseAnimation(setVisibility);
      setStashVisibility(setVisibility);
    }, 500);
  };

  return (
    <aside
      className={classNames(styles["stash-container"], {
        [styles["stash-container--close"]]: closeAnimation === true,
      })}
    >
      <div className="stash-container_header">
        <CloseButton setStashVisibility={closeSideBar} />
        <h2>Hideout Options</h2>
        <div className={styles["stash-container_reset-buttons"]}>
          {/* TODO: Add a distinct visual styling (icon?) to each buttons */}
          <ResetHideoutButton />
          <ResetStashButton />
        </div>
      </div>

      <div className="stash-container_content">
        <h3>Stash Inventory</h3>
        <div className={styles["stash-container_filter"]}>
          <input
            placeholder="Search here for a specific item"
            className={styles["stash-container_filter-input"]}
            type="text"
          />
        </div>
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
