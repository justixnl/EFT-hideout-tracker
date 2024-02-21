import { FunctionComponent } from 'react';
import styles from "./Panel.module.css";
import classNames from 'classnames';

// Utils
import { HideOutStations, Levels } from '../../../../utils/newHideout';

// Components
import PanelHeader from '../PanelHeader/PanelHeader';
import PanelInput from '../PanelInput/PanelInput';
import PanelFooter from '../PanelFooter/PanelFooter';

interface Props {
    index: number;
    station: HideOutStations;
    stationLevel: Levels;
    onInputChangeDebounced: (name: string, value: string, id: string) => void;
    setStationLevel: (id: string) => void; 
}

const Panel: FunctionComponent<Props> = ({ index, station, stationLevel, onInputChangeDebounced, setStationLevel}) => {
    return (
        <div
        key={index + station.id}
        className={classNames(styles["station-panel"], {
            [styles["station-panel_no-flex"]]: station.levels.length == 1,
        })}
        >
        <PanelHeader station={station} stationLevel={stationLevel} />

        <div className={styles["station-panel_content"]}>
            <h4 style={{ marginBottom: "4px" }}>Item Requires:</h4>
            {stationLevel.itemRequirements.map((itemReq) => (
            <PanelInput
                itemReq={itemReq}
                stationLevel={stationLevel}
                onInputChangeDebounced={onInputChangeDebounced}
            />
            ))}
        </div>

        <PanelFooter station={station} stationLevel={stationLevel} setStationLevel={setStationLevel} />
        </div>
    );
}

export default Panel;