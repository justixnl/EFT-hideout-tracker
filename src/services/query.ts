export const query = `query {
  hideoutStations {
    id,
    name,
    levels {
      level,
      itemRequirements {
        item {
          name,
          baseImageLink,
          inspectImageLink,
          image512pxLink,
          image8xLink,
        },
        count
      },
      stationLevelRequirements {
        station {
          name
        },
        level
      },
      skillRequirements {
        name,
        level
      },
      traderRequirements {
        trader {
          name,
        },
        value
      }
      bonuses {
        name,
        value,
      }
    },
  }
}`