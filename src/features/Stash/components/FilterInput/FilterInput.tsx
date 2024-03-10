import { ChangeEvent, FunctionComponent } from "react";
import styles from "./FilterInput.module.css";

interface Props {
  filterValue: string;
  clearFilterData: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: FunctionComponent<Props> = ({ filterValue, handleChange, clearFilterData }) => {
  return (
    <div className={styles["stash-container_filter"]}>
      <input
        placeholder="Search here for a specific item"
        className={styles["stash-container_filter-input"]}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
      <button className={styles["clear-filter-button"]} onClick={clearFilterData}>
        ✖
      </button>
    </div>
  );
};

export default FilterInput;
