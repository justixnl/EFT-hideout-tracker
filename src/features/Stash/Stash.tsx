import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import styles from "./Stash.module.css";

// Utils
import classNames from "classnames";
import { InventoryDataItem } from "../../infrastructure/Layouts/RootLayout";

// Components
import CloseButton from "./components/CloseButton/CloseButton";
import ResetStashButton from "./components/ResetStashButton/ResetStashButton";
import ResetHideoutButton from "./components/ResetHideoutButton/ResetHideoutButton";
import StashInput from "./components/StashInput/StashInput";
import FilterInput from "./components/FilterInput/FilterInput";

interface Props {
  setStashVisibility: (isVisible: boolean) => void;
  stashInventory: InventoryDataItem[];
}

const Stash: FunctionComponent<Props> = ({ stashInventory, setStashVisibility }) => {
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<InventoryDataItem[]>([]);

  /**
   * This function allows for a slideOut animation to take place
   * before removing the sidebar from the DOM
   * @param setVisibility boolean to set the visibility
   */
  const closeSideBar = (setVisibility: boolean) => {
    setCloseAnimation(true);

    // Timeout to allow for the close animation to take place
    // also sets both setCloseAnimation & setStashVisibility to false
    setTimeout(() => {
      setCloseAnimation(setVisibility);
      setStashVisibility(setVisibility);
    }, 500);
  };

  /**
   * handleChange will set the filteredItems and the filterValue
   * @param e returns the ChangeEvent
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    setFilteredItems(filterStashItems(e.target.value));
  };

  /**
   * A filter for the Stash items if you want to find a specific item
   * @param filterItem The string to be filtered
   * @returns Return a Array of Objects based on the filter string
   */
  const filterStashItems = (filterItem: string) => {
    return stashInventory.filter((item: InventoryDataItem) =>
      item.name.toLowerCase().includes(filterItem.toLowerCase())
    );
  };

  /**
   * As the function says this will clear the Filter Input
   * and reset the array
   */
  const clearFilterInput = () => {
    const emptyString = "";

    setFilterValue(emptyString);
    setFilteredItems(filterStashItems(emptyString));
  };

  // UseEffect to display the filtered list on the initial render
  useEffect(() => {
    setFilteredItems(filterStashItems(""));
  }, []);

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
        {/* TODO: Most likely need to change FilterInput into a childer prop to make sure it doesnt rerender if the list does */}
        <FilterInput filterValue={filterValue} handleChange={handleChange} clearFilterData={clearFilterInput} />
        <div className={styles["stash-container_content-list"]}>
          {filteredItems.map((item: InventoryDataItem, index: number) => (
            <StashInput key={index} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Stash;
