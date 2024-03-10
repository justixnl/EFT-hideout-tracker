/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FunctionComponent, useCallback, useState } from "react";
import styles from "./StashInput.module.css";

interface Props {
  item: {
    name: string;
    amount: number;
  };
}

const StashInput: FunctionComponent<Props> = ({ item }) => {
  const [inputValue, setInputValue] = useState(item.amount); // State for the input value

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "4px 0",
      }}
    >
      <div style={{ width: "150px" }}>{item.name}:</div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button className={styles["stash-container_increase-btn"]}>+5</button>
        <button className={styles["stash-container_increase-btn"]}>+10</button>
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          className={styles["stash-container_input"]}
          min="0"
        />
      </div>
    </div>
  );
};

export default StashInput;
