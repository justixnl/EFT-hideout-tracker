import classNames from "classnames";
import { ChangeEvent, FunctionComponent, useCallback, useState } from "react";
import styles from "./PanelInput.module.css";
import { ItemRequirements, Levels } from "../../../../utils/newHideout";
import { debounce } from "../../../../utils/debounce";

interface PanelInputProps {
  itemReq: ItemRequirements;
  stationLevel: Levels;
  onInputChange: (name: string, value: string, id: string) => void;
}

/**
 * Input specific to the panel component
 * @param itemReq returns a name, the count required and the current amount collected
 * @param stationLevel returns the complete stationLevel object
 * @param onInputChangeDebounced updates the state
 * @returns
 */
const PanelInput: FunctionComponent<PanelInputProps> = ({ itemReq, stationLevel, onInputChange }) => {
  const [inputValue, setInputValue] = useState(itemReq.current); // State for the input value

  const debounceOnInputChange = debounce((name: string, count: string, id: string) => {
    onInputChange(name, count, id);
  }, 500);

  // Returns the onInputChangeDebounced to the parent component
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(Number(e.target.value));
      // onInputChange(itemReq.name, e.target.value, stationLevel.id);
      debounceOnInputChange(itemReq.name, e.target.value, stationLevel.id);
    },
    [itemReq.name, onInputChange, stationLevel.id]
  );

  const maxAmountOnClick = () => {
    setInputValue(itemReq.count);
    onInputChange(itemReq.name, itemReq.count.toString(), stationLevel.id);
  };

  return (
    <div className={styles["panel-input-container"]}>
      <div className={styles["panel-input_name"]} style={{ display: "inline-block" }}>
        {itemReq.name}:
      </div>
      <div className={styles["panel-input_edit-container"]}>
        <button onClick={maxAmountOnClick} className={styles["panel-input_max-btn"]}>
          max
        </button>
        <input
          type="number"
          min="0"
          max={itemReq.count}
          className={classNames(styles["panel-input_input"], {
            [styles["panel-input_roubles"]]: itemReq.name == "Roubles",
          })}
          value={inputValue}
          onChange={handleChange}
        />
        / <b>{itemReq.count}</b>
      </div>
    </div>
  );
};

export default PanelInput;
