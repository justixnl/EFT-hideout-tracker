import { ApiHideOutStation } from "./ApiHideOut";

export const createHideoutTracker = (hideoutStations: ApiHideOutStation[]) => {
  // Creates a new array with a sligthy different structure
  const newArray = hideoutStations.map(({ id, name, levels }: ApiHideOutStation) => ({
    id,
    name,
    levels: levels.map(({ level, stationLevelRequirements, skillRequirements, itemRequirements }, index) => ({
      id: `${id}${index}`,
      level,
      isVisible: index === 0 ? true : false,
      upgradable: false, // For checkmark
      stationLevelRequirements: Array.isArray(stationLevelRequirements)
        ? stationLevelRequirements.map(({ station, level }) => ({
            name: station.name,
            level,
            current: null, // Add the new 'current' property and set it to null to reflect it should be empty
          }))
        : [],
      skillRequirements: Array.isArray(skillRequirements)
        ? skillRequirements.map(({ name, level }) => ({
            name,
            level,
            current: 0, // Add the new 'current' property and set it to 0
          }))
        : [],
      itemRequirements: Array.isArray(itemRequirements)
        ? itemRequirements.map(({ item, count }) => ({
            name: item.name,
            count,
            current: 0, // Add the new 'current' property and set it to 0
          }))
        : [],
    })),
  }));

  return newArray;
}