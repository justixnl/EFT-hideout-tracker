import classNames from "classnames";
import { ChangeEvent, FunctionComponent, useCallback } from "react";
import styles from "./PanelInput.module.css";
import { ItemRequirements, Levels } from "../../../../utils/newHideout";

// TODO: Use the correct interfaces
interface PanelInputProps {
  itemReq: ItemRequirements;
  stationLevel: Levels;
  onInputChangeDebounced: (name: string, value: string, id: string) => void;
}

/**
 * Input specific to the panel component
 * @param itemReq returns a name, the count required and the current amount collected
 * @param stationLevel returns the complete stationLevel object
 * @param onInputChangeDebounced updates the state
 * @returns 
 */
const PanelInput: FunctionComponent<PanelInputProps> = ({ itemReq, stationLevel, onInputChangeDebounced }) => {
  // Returns the onInputChangeDebounced to the parent component
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onInputChangeDebounced(itemReq.name, e.target.value, stationLevel.id);
    },
    [itemReq.name, onInputChangeDebounced, stationLevel.id]
  );

  return (
    <div className={styles["panel-input-container"]}>
      <div className={styles["panel-input_name"]} style={{ display: "inline-block" }}>
        {itemReq.name}:
      </div>
      <div className={styles["panel-input_edit-container"]}>
        <input
          type="number"
          min="0"
          max={itemReq.count}
          className={classNames(styles["panel-input_input"], {
            [styles["panel-input_roubles"]]: itemReq.name == "Roubles",
          })}
          defaultValue={itemReq.current}
          onChange={handleChange}
        />
        / <b>{itemReq.count}</b>
      </div>
    </div>
  );
};

export default PanelInput;
