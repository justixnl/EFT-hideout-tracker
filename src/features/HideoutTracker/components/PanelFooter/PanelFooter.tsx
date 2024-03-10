import { FunctionComponent } from "react";
import styles from "./PanelFooter.module.css";
import { HideOutStations, Levels } from "../../../../utils/newHideout";

interface Props {
  station: HideOutStations;
  stationLevel: Levels;
  setStationLevel: (id: string) => void;
}

/**
 * For now it only holds a Button specific to the Footer Panel component
 * @param station returns the complete station in order to determine current level and name for the checkbox id
 * @param stationLevel returns the complete stationLevel object
 * @param setStationLevel updates the state with the last used station (id)
 * @returns
 */
const PanelFooter: FunctionComponent<Props> = ({ station, stationLevel, setStationLevel }) => {
  const conditionalRender =
    (station.name === "Stash" && stationLevel.level === 1) ||
    (station.name === "Defective Wall" && stationLevel.level <= 3);

  // TODO: REMOVE!
  // console.warn("PanelFooter Rerendered!", station.name);

  return (
    <div className={styles["station-panel_footer"]}>
      {conditionalRender ? (
        <button
          className={styles["button-upgrade"]}
          id={`checkbox-${station.name}-${stationLevel.level}`}
          onClick={() => setStationLevel(stationLevel.id)}
        >
          Upgrade
        </button>
      ) : (
        <button
          className={styles["button-upgrade"]}
          id={`checkbox-${station.name}-${stationLevel.level}`}
          disabled={!stationLevel.upgradable}
          onClick={() => setStationLevel(stationLevel.id)}
        >
          {stationLevel.upgradable ? "Upgrade" : "Unavailable"}
        </button>
      )}
    </div>
  );
};

export default PanelFooter;
