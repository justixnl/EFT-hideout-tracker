import { FunctionComponent } from 'react';
import styles from "./PanelFooter.module.css";
import { HideOutStations, Levels } from '../../../../utils/newHideout';

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
    return (
        <div className={styles["station-panel_footer"]}>
            <button
            className={styles["button-upgrade"]}
            id={`checkbox-${station.name}-${stationLevel.level}`}
            disabled={!stationLevel.upgradable}
            onClick={() => setStationLevel(stationLevel.id)}
            >
            {stationLevel.upgradable ? "Upgrade" : "Unavailable"}
            </button>
        </div>
    );
}

export default PanelFooter;