export interface ApiItem {
  name: string;
}

export interface ApiItemRequirements {
  item: ApiItem;
  count: number;
}

export interface ApiStationLevelRequirements {
  station: {
    name: string;
  };
  level: number;
}

export interface ApiSkillRequirements {
  name: string;
  level: number;
}

export interface ApiLevels {
  level: number;
  stationLevelRequirements: ApiStationLevelRequirements[];
  skillRequirements: ApiSkillRequirements[];
  itemRequirements: ApiItemRequirements[];
}

export interface ApiHideOutStation {
  id: string;
  name: string;
  levels: ApiLevels[];
}

export interface ApiHideoutRequirements {
  hideoutStations: ApiHideOutStation[];
}
