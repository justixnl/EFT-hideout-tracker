import { ChangeEvent, FunctionComponent, useState } from "react";
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
    // TODO: Need to handle the update for the stash and localstorage here
    setInputValue(Number(e.target.value));
  };

  const addToInput = (amount: number) => {
    setInputValue((prevValue) => prevValue + amount);
  };

  const handleAdd5 = () => {
    addToInput(5);
  };

  const handleAdd10 = () => {
    addToInput(10);
  };

  // TODO: Fix all the CSS here
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
        <button onClick={handleAdd5} className={styles["stash-container_increase-btn"]}>
          +5
        </button>
        <button onClick={handleAdd10} className={styles["stash-container_increase-btn"]}>
          +10
        </button>
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
