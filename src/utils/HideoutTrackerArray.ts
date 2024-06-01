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
        ? stationLevelRequirements.map(({ station, level: stationReqLevel }) => ({
            name: station.name,
            level: stationReqLevel,
            amount: null, // Add the new 'amount' property and set it to null to reflect it should be empty
          }))
        : [],
      skillRequirements: Array.isArray(skillRequirements)
        ? skillRequirements.map(({ name: skillName, level: skillLevel }) => ({
            name: skillName,
            level: skillLevel,
            amount: 0, // Add the new 'amount' property and set it to 0
          }))
        : [],
      itemRequirements: Array.isArray(itemRequirements)
        ? itemRequirements.map(({ item, count }) => ({
            name: item.name,
            count,
            amount: 0, // Add the new 'amount' property and set it to 0
          }))
        : [],
    })),
  }));

  return newArray;
};
