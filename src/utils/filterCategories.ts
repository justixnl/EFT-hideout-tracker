interface Data {
  data: {
    barters: Barters[];
  };
}

interface Barters {
  requiredItems: RequiredItem[];
}

interface RequiredItem {
  item: Item;
}

interface Item {
  name: string;
  category: {
    name: string;
  };
}

export const filterItemsByCategories = (inputData: Data, categoriesToFilter: string[]) => {
  const filteredItems: RequiredItem[] = [];
  const existingItemNames = new Set();

  inputData.data.barters.forEach((barter) => {
    barter.requiredItems.forEach((requiredItem) => {
      const itemName = requiredItem.item.name;
      if (
        categoriesToFilter.includes(requiredItem.item.category.name) &&
        !existingItemNames.has(itemName)
      ) {
        filteredItems.push(requiredItem);
        existingItemNames.add(itemName);
      }
    });
  });

  return filteredItems;
}