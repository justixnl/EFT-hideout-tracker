import { FunctionComponent } from "react";
import styles from "./PanelHeader.module.css";
import { HideOutStations, Levels } from "../../../../utils/newHideout";

interface Props {
  station: HideOutStations;
  stationLevel: Levels;
}

const PanelHeader: FunctionComponent<Props> = ({ station, stationLevel }) => {
  // TODO: REMOVE!
  // console.warn("PanelHeader Rerendered!");

  return (
    <h3 className={styles["panel-header"]}>
      {station.name} level: {stationLevel.level}
    </h3>
  );
};

export default PanelHeader;
