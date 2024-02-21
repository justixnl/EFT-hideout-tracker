import { FunctionComponent, useEffect, useState } from "react";
import styles from "./HideoutTracker.module.css";

// Utils & Services
import { HideoutLoader } from "../services/API";
import { HideOutStations } from "./../utils/newHideout";
import { debounce } from "./../utils/debounce";
import { createHideoutTracker } from "../utils/HideoutTrackerArray";

// Components
import Panel from "../features/HideoutTracker/components/Panel/Panel";

const HideoutTracker: FunctionComponent = () => {
  // Introduce loading state
  const [loading, setLoading] = useState(true);
  const [stationLevelId, setStationLevelId] = useState<string | null>(null);
  const [onInputChangeExecuted, setOnInputChangeExecuted] = useState(false);
  const [hideoutStations, setHideoutStations] = useState<HideOutStations[] | null>(null);

  // Check if data exists in localStorage
  const localStorageData = localStorage.getItem("hideoutTrackerArray");

  /**
   * A simple function that updates the "hideoutStations" state & localStorage
   * when a change has been detected
   */
  const onInputChangeDebounced = debounce((targetKey: string, newValue: string | number, levelId: string) => {
    setStationLevelId(levelId);
    setHideoutStations((prevData) => {
      if (prevData) {
        const newData = prevData.map((station: HideOutStations) => ({
          ...station,
          levels: station.levels.map((level) => {
            if (level.id === levelId) {
              // Match the correct level using the id
              return {
                ...level,
                itemRequirements: level.itemRequirements.map((itemReq) => {
                  if (itemReq.name === targetKey) {
                    return {
                      ...itemReq,
                      current: typeof newValue === "string" ? parseInt(newValue, 10) : newValue,
                    };
                  }
                  return itemReq;
                }),
              };
            }
            return level;
          }),
        }));

        // Updates the localStorage with the new values by insterting a new Array
        // With the updated value
        localStorage.setItem("hideoutTrackerArray", JSON.stringify(newData));

        // setOnInputChange has been executed
        setOnInputChangeExecuted(true);

        // The newData (array) for the hideoutStations state
        return newData;
      }

      return prevData;
    });
  }, 500);

  /**
   * This function returns the last station (the specific Stationlevel to be exact) that has been modified
   * @param stationLevelId the station id
   * @returns
   */
  const getLastModifiedStation = (stationLevelId: string | null) => {
    if (!hideoutStations) return null; // Ensure hideoutStations is not null or undefined

    for (const station of hideoutStations) {
      const result = station.levels.find((level) => level.id === stationLevelId);
      if (result) {
        return result;
      }
    }

    return null; // Return null if no matching station is found
  };

  /**
   * This runs a check to see if the station (of that specific level) is allowed to
   * upgrade or not
   * @param stationLevelId The station Level ID
   */
  const setUnsetStationUpgradable = (stationLevelId: string | null) => {
    const Levels = getLastModifiedStation(stationLevelId); // prob rename to level or stationLevel

    let result = false; // Default value if Levels is null or Levels.itemRequirements doesn't meet conditions

    if (Levels) {
      // Check if Levels.itemRequirements meets conditions
      result = Levels.itemRequirements.every((req) => req.count === req.current);
    } else {
      console.error("Something went wrong!"); // Log an error if Levels is null
    }

    setHideoutStations((prevData) => {
      if (prevData) {
        const newData = prevData.map((station: HideOutStations) => ({
          ...station,
          levels: station.levels.map((level) => {
            if (level.id === stationLevelId) {
              // Match the correct level using the id
              return {
                ...level,
                upgradable: result ? true : false,
              };
            }
            return level;
          }),
        }));

        // Updates the localStorage with the new values by insterting a new Array
        // With the updated value
        localStorage.setItem("hideoutTrackerArray", JSON.stringify(newData));

        // The newData (array) for the hideoutStations state
        return newData;
      }

      return prevData;
    });
  };

  /**
   * This function will level up the Station. This is done by hidding the previous level and showning the next one
   * In order to do this both the "hideoutStations" state and the localStorage get updated
   * @param stationLevelId The station Level ID
   */
  const setStationLevel = (stationLevelId: string) => {
    setHideoutStations((prevData) => {
      if (prevData) {
        const lastChar = stationLevelId.charAt(stationLevelId.length - 1); // Gets the last character of the string
        // add +1 to the last character (which is an index num) and than adds it back to the string
        const nextStationIndex = stationLevelId.slice(0, -1) + (parseInt(lastChar) + 1).toString();

        const newData = prevData.map((station: HideOutStations) => ({
          ...station,
          levels: station.levels.map((level) => {
            if (level.id === stationLevelId || level.id === nextStationIndex) {
              // Match the correct level using the id
              return {
                ...level,
                isVisible: !level.isVisible,
              };
            }
            return level;
          }),
        }));

        // Updates the localStorage with the new values by insterting a new Array
        // With the updated value
        localStorage.setItem("hideoutTrackerArray", JSON.stringify(newData));

        // The newData (array) for the hideoutStations state
        return newData;
      }

      return prevData;
    });
  };

    /**
   * This useEffect retrieves all the current requirements (resources/skills)
   * required to level up your hideout stations if no data exists in the localStorage
   * If it does exist it will use the localstorage data to set the "hideoutStations" state
   */
  useEffect(() => {
    if (!localStorageData) {
      // Data doesn't exist in localStorage, retrieve API data
      const fetchHideoutData = async () => {
        const hideoutData = await HideoutLoader();
        const hideoutTrackerArray = createHideoutTracker(hideoutData.data.hideoutStations);

        // Set hideoutStations in the component state
        setHideoutStations(hideoutTrackerArray);

        // Save the filled data in localStorage
        localStorage.setItem("hideoutTrackerArray", JSON.stringify(hideoutTrackerArray));

        setLoading(false);
      };

      fetchHideoutData();
    } else {
      // Data exists in localStorage, no need to fetch
      // Set loading to false
      const hideoutTrackerArray = JSON.parse(localStorageData);

      setHideoutStations(hideoutTrackerArray);

      setLoading(false);
    }
  }, [localStorageData]);

  /**
   * If a change on a input has been detected run setUnsetStationUpgradable
   *
   * NOTE: Maybe rework this? I can just excute "setUnsetStationUpgradable"
   * during the onInputChangeDebounced. HOWEVER! Doing that will make the
   * function unpure
   */
  useEffect(() => {
    if (onInputChangeExecuted) {
      setUnsetStationUpgradable(stationLevelId);

      // setOnInputChangeExecuted reset
      setOnInputChangeExecuted(false);
    }
  }, [onInputChangeDebounced]);

  return (
    <div className={styles["hideoutTracker-container"]}>
      {loading && !hideoutStations ? (
        <p>Loading...</p>
      ) : (
        // TODO: Vragen aan Rick of "as HideOutStations[]" een goede oplossing
        // Want ik ben niet 100% zeker dat dit nooit null is
        (hideoutStations as HideOutStations[]).map((station) => (
          <>
            {station.levels.map(
              (stationLevel, index: number) =>
                stationLevel.isVisible && (
                    <Panel 
                      index={index} 
                      station={station} 
                      stationLevel={stationLevel} 
                      onInputChangeDebounced={onInputChangeDebounced} 
                      setStationLevel={setStationLevel} 
                    />
                )
            )}
          </>
        ))
      )}
    </div>
  );
};

export default HideoutTracker;
