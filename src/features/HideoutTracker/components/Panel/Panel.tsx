import { FunctionComponent } from "react";
import styles from "./Panel.module.css";
import classNames from "classnames";

// Utils
import { HideOutStations, Levels } from "../../../../utils/newHideout";

// Components
import PanelHeader from "../PanelHeader/PanelHeader";
import PanelInput from "../PanelInput/PanelInput";
import PanelFooter from "../PanelFooter/PanelFooter";

interface Props {
  index: number;
  station: HideOutStations;
  stationLevel: Levels;
  onInputChange: (name: string, value: string, id: string) => void;
  setStationLevel: (id: string) => void;
}

const Panel: FunctionComponent<Props> = ({ index, station, stationLevel, onInputChange, setStationLevel }) => {
  return (
    <div
      key={"jhue8652" + station.id + index}
      className={classNames(styles["station-panel"], {
        [styles["station-panel_no-flex"]]: station.levels.length == 1,
      })}
    >
      <PanelHeader station={station} stationLevel={stationLevel} />

      <div key={"kgh3123" + station.id + index} className={styles["station-panel_content"]}>
        <h4 style={{ marginBottom: "4px" }}>Item Requires:</h4>
        {stationLevel.itemRequirements.map((itemReq) => (
          <PanelInput itemReq={itemReq} stationLevel={stationLevel} onInputChange={onInputChange} />
        ))}
      </div>

      <PanelFooter
        key={"hgnmq83423" + station.id + index}
        station={station}
        stationLevel={stationLevel}
        setStationLevel={setStationLevel}
      />
    </div>
  );
};

export default Panel;
