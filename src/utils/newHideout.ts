// The new data structure with the desired structure
export interface StationLevelRequirements {
    name: string;
    level: number;
    current: number | null;
}

export interface SkillRequirements {
    name: string;
    level: number;
    current: number;
}

export interface ItemRequirements {
    name: string;
    count: number;
    current: number;
}

// Rename to StationLevel? Or Station?
export interface Levels {
    id: string;
    level: number;
    isVisible: boolean;
    upgradable: boolean;
    stationLevelRequirements: StationLevelRequirements[];
    skillRequirements: SkillRequirements[];
    itemRequirements: ItemRequirements[];
}

export interface HideOutStations {
    id: string;
    name: string;
    levels: Levels[];
}