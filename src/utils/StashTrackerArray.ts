import { InventoryData, InventoryRequiredItem } from "./interfaces";

export const filterItemsByCategories = (inputData: InventoryData, categoriesToFilter: string[]) => {
  const filteredItems: InventoryRequiredItem[] = [];
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

  return filteredItems
}

 export const createStashTracker = (inputData: InventoryData, categoriesToFilter: string[]) => {
  const filteredList = filterItemsByCategories(inputData, categoriesToFilter)

  const stashData = filteredList.map((data: InventoryRequiredItem) => {
    return { name: data.item.name, amount: 0}    
  })

  return stashData.sort((a, b) => {
  // Convert names to lowercase for case-insensitive sorting
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  
  if (nameA < nameB) {
    return -1; // A should come before B in the sorted order
  } else if (nameA > nameB) {
    return 1; // A should come after B in the sorted order
  } else {
    return 0; // Names are equal, no change in order
  }
});

}