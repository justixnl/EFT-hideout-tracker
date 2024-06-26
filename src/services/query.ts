export const hideoutRequirementsQuery = `query {
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

export const inventoryCatalogueQuery = `query {
    barters {
    requiredItems {
      item {
        name
        category {
          name
        }
      }
    }
  }
}`